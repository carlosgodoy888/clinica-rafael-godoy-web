"use client";

import { useEffect, useSyncExternalStore } from "react";
import { site } from "@/config/site";
import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  getStoredConsent,
  setDefaultGoogleConsent,
  subscribeConsent,
  updateGoogleConsent,
} from "@/lib/consent";

const GTM_SCRIPT_ID = "gtm-script";

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

export function GtmLoader() {
  useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  );

  useEffect(() => {
    setDefaultGoogleConsent();

    const consent = getStoredConsent();
    updateGoogleConsent(consent);

    if (consent?.analytics || consent?.marketing) {
      loadGtm(site.tracking.gtmId);
    }
  });

  return null;
}