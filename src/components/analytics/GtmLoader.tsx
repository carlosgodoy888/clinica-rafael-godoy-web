"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { site } from "@/config/site";
import type { ConsentPreferences } from "@/lib/consent";
import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  getStoredConsent,
  setDefaultGoogleConsent,
  subscribeConsent,
  updateGoogleConsent,
} from "@/lib/consent";

const GTM_SCRIPT_ID = "gtm-script";

/**
 * Carga Google Tag Manager una sola vez.
 *
 * Importante:
 * - El script se identifica con `id="gtm-script"` para evitar duplicados.
 * - GTM se carga ahora desde el inicio de la visita.
 * - La privacidad la controla Google Consent Mode, no el bloqueo del script.
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
 * Estrategia actual:
 *
 * 1. Siempre inicializamos Google Consent Mode en "denied".
 *    Esto significa:
 *    - analytics_storage denied
 *    - ad_storage denied
 *    - ad_user_data denied
 *    - ad_personalization denied
 *
 * 2. Cargamos GTM desde el inicio.
 *    Esto corresponde al enfoque de Consent Mode avanzado:
 *    GTM puede cargar, pero las etiquetas de Google deben respetar el estado
 *    de consentimiento.
 *
 * 3. Si el usuario acepta cookies o tiene una preferencia guardada:
 *    actualizamos Consent Mode según su selección.
 *
 * 4. Si el usuario acepta analítica/marketing durante la sesión:
 *    enviamos eventos auxiliares al dataLayer:
 *    - cookie_consent_update
 *    - consent_page_view
 *
 *    Estos eventos ayudan a GTM a disparar medición tras la aceptación.
 */
export function GtmLoader() {
  const consentSnapshot = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  );

  const hasInitializedRef = useRef(false);
  const previousConsentRef = useRef<ConsentPreferences | null>(null);

  useEffect(() => {
    /**
     * 1. Inicializamos Consent Mode una sola vez.
     *
     * Debe ocurrir antes o al menos en la misma fase en la que cargamos GTM,
     * para que Google Tags arranquen con estado denegado por defecto.
     */
    if (!hasInitializedRef.current) {
      setDefaultGoogleConsent();
      hasInitializedRef.current = true;
    }

    /**
     * 2. Leemos consentimiento guardado.
     *
     * Si no existe, consent = null y se mantiene el estado denied.
     * Si existe, se actualiza Consent Mode con sus preferencias.
     */
    const consent = getStoredConsent();

    updateGoogleConsent(consent);

    /**
     * 3. Cargamos GTM siempre.
     *
     * Ya no bloqueamos GTM hasta aceptar. El control real lo hace Consent Mode.
     * Esto permite recuperar page_view/session_start y mejorar medición.
     */
    loadGtm(site.tracking.gtmId);

    /**
     * 4. Detectamos cambios de consentimiento.
     *
     * En la primera ejecución no enviamos eventos extra para evitar duplicados
     * en usuarios que ya tenían consentimiento guardado.
     */
    const previousConsent = previousConsentRef.current;
    const isFirstRun = previousConsent === null;

    if (!isFirstRun && consent) {
      const analyticsJustGranted =
        !previousConsent?.analytics && consent.analytics;

      const marketingJustGranted =
        !previousConsent?.marketing && consent.marketing;

      /**
       * Si el usuario acaba de conceder analítica o marketing durante esta sesión,
       * avisamos a GTM con un evento explícito.
       *
       * Esto ayuda si el page_view inicial ocurrió con consentimiento denied.
       */
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

    previousConsentRef.current = consent;
  }, [consentSnapshot]);

  return null;
}