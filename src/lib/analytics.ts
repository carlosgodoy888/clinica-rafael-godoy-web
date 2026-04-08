import { site } from "@/config/site";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function pushEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

export function trackPhoneCall(location: string) {
  pushEvent("phone_call", {
    event_category: "engagement",
    event_label: location,
    phone_number: "+34957292969",
  });
}

export function trackMapClick() {
  pushEvent("map_click", {
    event_category: "engagement",
    event_label: "google_maps",
  });
}

export function getGtmScript(gtmId = site.tracking.gtmId) {
  return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`;
}

export function getGtmNoscript(gtmId = site.tracking.gtmId) {
  return `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
}
