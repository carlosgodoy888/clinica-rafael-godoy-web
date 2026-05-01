"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  BarChart3,
  Check,
  Cookie,
  Settings2,
  ShieldCheck,
  X,
} from "lucide-react";
import {
  acceptAllConsent,
  getConsentSnapshot,
  getServerConsentSnapshot,
  getStoredConsent,
  saveConsent,
  subscribeConsent,
  subscribeCookiePreferencesOpen,
} from "@/lib/consent";
import { cn } from "@/lib/utils";

function PreferenceToggle({
  checked,
  onChange,
  disabled = false,
  label,
  description,
}: {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-bold text-gray-950">{label}</p>
          <p className="mt-1 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        </div>

        <button
          type="button"
          disabled={disabled}
          onClick={() => onChange?.(!checked)}
          className={cn(
            "relative mt-0.5 h-7 w-12 shrink-0 rounded-full transition-colors",
            checked ? "bg-teal-600" : "bg-gray-300",
            disabled && "cursor-not-allowed opacity-80"
          )}
          aria-pressed={checked}
          aria-label={label}
        >
          <span
            className={cn(
              "absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform",
              checked ? "translate-x-5" : "translate-x-0"
            )}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}

export function CookieConsentBanner() {
  const consentSnapshot = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  );

  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(true);

  function openPreferences() {
    const currentConsent = getStoredConsent();

    // Si ya existe consentimiento previo, cargamos su configuración.
    // Si es primera visita, mostramos las opcionales activadas por defecto.
    setAnalyticsEnabled(currentConsent?.analytics ?? true);
    setMarketingEnabled(currentConsent?.marketing ?? true);
    setPreferencesOpen(true);
  }

  function closePreferences() {
    setPreferencesOpen(false);
  }

  function handleAcceptAll() {
    acceptAllConsent();
    setAnalyticsEnabled(true);
    setMarketingEnabled(true);
    setPreferencesOpen(false);
  }

  function handleSaveSelection() {
    saveConsent({
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    });

    setPreferencesOpen(false);
  }

  useEffect(() => {
    return subscribeCookiePreferencesOpen(() => {
      openPreferences();
    });
  }, []);

  const shouldShowBanner = !consentSnapshot;

  if (!shouldShowBanner && !preferencesOpen) {
    return null;
  }

  return (
    <>
      {/* Banner inferior */}
      {shouldShowBanner && !preferencesOpen && (
        <div
          className="fixed inset-x-0 bottom-0 z-[90] px-3 pb-3 sm:px-4 sm:pb-5"
          role="region"
          aria-label="Aviso de cookies"
        >
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white/95 shadow-2xl shadow-gray-900/15 backdrop-blur-md">
            <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex gap-3">
                <div
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700"
                  aria-hidden="true"
                >
                  <Cookie className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-base font-bold text-gray-950">
                    Usamos cookies
                  </h2>

                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-gray-600">
                    Utilizamos cookies necesarias para que la web funcione y, si
                    aceptas, analítica para conocer el uso de la página, medir
                    llamadas o clics en ubicación y mejorar nuestros servicios.
                  </p>

                  <Link
                    href="/politica-cookies"
                    className="mt-2 inline-flex text-sm font-semibold text-teal-700 underline-offset-4 hover:underline"
                  >
                    Ver política de cookies
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
                <button
                  type="button"
                  onClick={openPreferences}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-bold text-gray-800 transition-colors hover:bg-gray-50"
                >
                  <Settings2 className="h-4 w-4" aria-hidden="true" />
                  Gestionar preferencias
                </button>

                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-2xl bg-teal-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-teal-700"
                >
                  <Check className="h-4 w-4" aria-hidden="true" />
                  Aceptar todas
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Panel de preferencias */}
      {preferencesOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-gray-950/45 px-3 py-4 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-preferences-title"
        >
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
            <div className="border-b border-gray-100 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                    Preferencias
                  </p>

                  <h2
                    id="cookie-preferences-title"
                    className="text-2xl font-bold tracking-tight text-gray-950"
                  >
                    Configurar cookies
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Puedes mantener activadas todas las cookies opcionales o
                    desactivar las categorías que no quieras permitir. Las
                    cookies necesarias están siempre activas.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closePreferences}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-800"
                  aria-label="Cerrar preferencias de cookies"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="space-y-3 bg-gray-50 p-5 sm:p-6">
              <PreferenceToggle
                checked
                disabled
                label="Cookies necesarias"
                description="Son imprescindibles para que la web funcione, mantener la seguridad y recordar tu elección de consentimiento."
              />

              <PreferenceToggle
                checked={analyticsEnabled}
                onChange={setAnalyticsEnabled}
                label="Cookies de analítica"
                description="Nos ayudan a conocer visitas, tratamientos consultados, llamadas iniciadas y clics en ubicación para mejorar la web."
              />

              <PreferenceToggle
                checked={marketingEnabled}
                onChange={setMarketingEnabled}
                label="Cookies de marketing"
                description="Permitirían medir campañas publicitarias y mejorar anuncios. Actualmente las dejamos preparadas para futuras campañas."
              />

              <div className="rounded-2xl border border-teal-100 bg-teal-50 p-4">
                <div className="flex gap-3">
                  <ShieldCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-700"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-teal-950/80">
                    Puedes cambiar tu elección más adelante desde el enlace{" "}
                    <strong>Configurar cookies</strong> del pie de página.
                  </p>
                </div>
              </div>

              <Link
                href="/politica-cookies"
                className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 underline-offset-4 hover:underline"
              >
                <BarChart3 className="h-4 w-4" aria-hidden="true" />
                Leer política de cookies
              </Link>
            </div>

            <div className="grid gap-2 border-t border-gray-100 p-5 sm:grid-cols-2 sm:p-6">
              <button
                type="button"
                onClick={handleSaveSelection}
                className="inline-flex min-h-[46px] items-center justify-center rounded-2xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-bold text-teal-800 transition-colors hover:bg-teal-100"
              >
                Guardar selección
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="inline-flex min-h-[46px] items-center justify-center rounded-2xl bg-teal-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-700"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      )}

      <span className="sr-only" aria-live="polite">
        {consentSnapshot ? "Preferencias de cookies guardadas" : ""}
      </span>
    </>
  );
}