export type ConsentPreferences = {
  version: string;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
  expiresAt: string;
};

export type ConsentUpdateInput = {
  analytics: boolean;
  marketing: boolean;
};

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const CONSENT_STORAGE_KEY = "clinic_cookie_consent";
export const CONSENT_VERSION = "1.0";
export const CONSENT_TTL_DAYS = 365;

const CONSENT_CHANGED_EVENT = "clinic-cookie-consent-changed";
const COOKIE_PREFERENCES_OPEN_EVENT = "clinic-cookie-preferences-open";

function isBrowser() {
  return typeof window !== "undefined";
}

function addDays(date: Date, days: number) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
}

function isValidConsentValue(value: unknown): value is ConsentPreferences {
  if (!value || typeof value !== "object") return false;

  const consent = value as Partial<ConsentPreferences>;

  return (
    consent.version === CONSENT_VERSION &&
    consent.necessary === true &&
    typeof consent.analytics === "boolean" &&
    typeof consent.marketing === "boolean" &&
    typeof consent.updatedAt === "string" &&
    typeof consent.expiresAt === "string"
  );
}

function isExpired(consent: ConsentPreferences) {
  return new Date(consent.expiresAt).getTime() <= Date.now();
}

/**
 * Devuelve el consentimiento guardado si existe, es válido, está en versión actual
 * y no ha caducado. Si no, devuelve null.
 */
export function getStoredConsent(): ConsentPreferences | null {
  if (!isBrowser()) return null;

  try {
    const rawValue = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!rawValue) return null;

    const parsedValue: unknown = JSON.parse(rawValue);
    if (!isValidConsentValue(parsedValue)) return null;
    if (isExpired(parsedValue)) return null;

    return parsedValue;
  } catch {
    return null;
  }
}

/**
 * Snapshot estable para useSyncExternalStore.
 * Usamos string para que React pueda detectar cambios fácilmente.
 */

export function getConsentSnapshot() {
  const consent = getStoredConsent();

  return consent ? JSON.stringify(consent) : "";
}

export function getServerConsentSnapshot() {
  return "";
}

export function hasValidConsent() {
  return getStoredConsent() !== null;
}

function emitConsentChanged() {
  if (!isBrowser()) return;

  window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
}

export function subscribeConsent(listener: () => void) {
  if (!isBrowser()) return () => undefined;

  const onStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_STORAGE_KEY) listener();
  };

  window.addEventListener(CONSENT_CHANGED_EVENT, listener);
  window.addEventListener("storage", onStorage);

  return () => {
    window.removeEventListener(CONSENT_CHANGED_EVENT, listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function saveConsent(input: ConsentUpdateInput) {
  if (!isBrowser()) return null;

  const now = new Date();

  const consent: ConsentPreferences = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: input.analytics,
    marketing: input.marketing,
    updatedAt: now.toISOString(),
    expiresAt: addDays(now, CONSENT_TTL_DAYS).toISOString(),
  };

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  updateGoogleConsent(consent);
  emitConsentChanged();

  return consent;
}

export function acceptAllConsent() {
  return saveConsent({
    analytics: true,
    marketing: true,
  });
}

export function rejectOptionalConsent() {
  return saveConsent({
    analytics: false,
    marketing: false,
  });
}

/**
 * Inicializa dataLayer y gtag si todavía no existen.
 * Esto permite actualizar Consent Mode incluso antes de cargar GTM.
 */
export function ensureGoogleConsentApi() {
  if (!isBrowser()) return;

  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer = window.dataLayer || [];

      /**
       * El snippet oficial de gtag hace:
       * function gtag(){dataLayer.push(arguments);}
       *
       * Nuestro dataLayer está tipado como Record<string, unknown>[] por la
       * capa de analítica existente, así que hacemos este cast controlado
       * para mantener compatibilidad sin romper TypeScript.
       */
      window.dataLayer.push(args as unknown as Record<string, unknown>);
    };
  }
}

/**
 * Estado por defecto recomendado:
 * - Necesarias/seguridad: granted.
 * - Analítica/marketing/publicidad: denied hasta consentimiento.
 */
export function setDefaultGoogleConsent() {
  if (!isBrowser()) return;

  ensureGoogleConsentApi();

  window.gtag?.("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 500,
  });
}

/**
 * Actualiza Google Consent Mode según la preferencia guardada.
 */
export function updateGoogleConsent(consent: ConsentPreferences | null) {
  if (!isBrowser()) return;

  ensureGoogleConsentApi();

  window.gtag?.("consent", "update", {
    analytics_storage: consent?.analytics ? "granted" : "denied",
    ad_storage: consent?.marketing ? "granted" : "denied",
    ad_user_data: consent?.marketing ? "granted" : "denied",
    ad_personalization: consent?.marketing ? "granted" : "denied",
    functionality_storage: "granted",
    personalization_storage: "denied",
    security_storage: "granted",
  });
}

/**
 * Permite abrir el panel de preferencias desde cualquier componente,
 * por ejemplo desde el footer.
 */
export function openCookiePreferences() {
  if (!isBrowser()) return;

  window.dispatchEvent(new Event(COOKIE_PREFERENCES_OPEN_EVENT));
}

export function subscribeCookiePreferencesOpen(listener: () => void) {
  if (!isBrowser()) return () => undefined;

  window.addEventListener(COOKIE_PREFERENCES_OPEN_EVENT, listener);

  return () => {
    window.removeEventListener(COOKIE_PREFERENCES_OPEN_EVENT, listener);
  };
}