"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { site } from "@/config/site";
import type { ConsentPreferences } from "@/lib/consent";
import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  getStoredConsent,
  subscribeConsent,
  updateGoogleConsent,
} from "@/lib/consent";

const GTM_SCRIPT_ID = "gtm-script";

/**
 * Carga Google Tag Manager una sola vez.
 *
 * Importante:
 * - El script se identifica con `id="gtm-script"` para evitar duplicados.
 * - GTM se carga desde el inicio de la visita.
 * - La privacidad la controla Google Consent Mode.
 * - El default consent ya se define en layout.tsx con beforeInteractive.
 */
function loadGtm(gtmId: string) {
  if (typeof window === "undefined") return;
  if (!gtmId) return;
  if (document.getElementById(GTM_SCRIPT_ID)) return;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const firstScript = document.getElementsByTagName("script")[0];
  const script = document.createElement("script");

  script.id = GTM_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;

  firstScript.parentNode?.insertBefore(script, firstScript);
}

/**
 * Envía eventos internos al dataLayer.
 *
 * Estos eventos no sustituyen a GA4 directamente.
 * Sirven para que GTM pueda escucharlos y disparar etiquetas si están configuradas.
 */
function pushDataLayerEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}

/**
 * Devuelve información básica de la página actual.
 *
 * La usamos para poder mandar un evento de page view manual cuando el usuario
 * acaba de aceptar cookies durante la sesión.
 */
function getCurrentPageContext() {
  if (typeof window === "undefined") {
    return {
      page_location: "",
      page_path: "",
      page_title: "",
    };
  }

  return {
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}`,
    page_title: document.title,
  };
}

/**
 * Componente responsable de Google Tag Manager + Consent Mode.
 *
 * Estrategia:
 *
 * 1. El consentimiento por defecto se define en layout.tsx con Script
 *    beforeInteractive. Así GTM puede leerlo desde el inicio.
 *
 * 2. Este componente carga GTM desde el inicio.
 *
 * 3. Si existe una preferencia guardada en localStorage, actualiza
 *    Consent Mode según esa preferencia.
 *
 * 4. Si el usuario concede analítica/marketing durante la sesión,
 *    enviamos eventos auxiliares:
 *    - cookie_consent_update
 *    - consent_page_view
 *
 *    Estos eventos ayudan a GTM/GA4 a medir tras la aceptación.
 */
export function GtmLoader() {
  const consentSnapshot = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  );

  const hasRunRef = useRef(false);
  const previousConsentRef = useRef<ConsentPreferences | null>(null);

  useEffect(() => {
    /**
     * 1. Cargamos GTM siempre.
     *
     * El estado default de consentimiento ya está definido en layout.tsx
     * antes de que este componente cargue GTM.
     */
    loadGtm(site.tracking.gtmId);

    /**
     * 2. Leemos consentimiento guardado.
     *
     * Si no existe, no actualizamos a granted y se mantiene el estado denied.
     * Si existe, actualizamos Consent Mode según sus valores.
     */
    const consent = getStoredConsent();

    updateGoogleConsent(consent);

    /**
     * 3. Detectamos si el consentimiento cambia durante esta sesión.
     *
     * La primera ejecución solo sincroniza estado.
     * Las siguientes ejecuciones permiten detectar si el usuario acaba de
     * aceptar analítica o marketing.
     */
    const previousConsent = previousConsentRef.current;
    const hasAlreadyRun = hasRunRef.current;

    if (hasAlreadyRun && consent) {
      const analyticsJustGranted =
        !previousConsent?.analytics && consent.analytics;

      const marketingJustGranted =
        !previousConsent?.marketing && consent.marketing;

      if (analyticsJustGranted || marketingJustGranted) {
        pushDataLayerEvent("cookie_consent_update", {
          consent_analytics: consent.analytics,
          consent_marketing: consent.marketing,
          consent_version: consent.version,
        });

        pushDataLayerEvent("consent_page_view", {
          ...getCurrentPageContext(),
          consent_analytics: consent.analytics,
          consent_marketing: consent.marketing,
          consent_version: consent.version,
        });
      }
    }

    hasRunRef.current = true;
    previousConsentRef.current = consent;
  }, [consentSnapshot]);

  return null;
}