import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/**
 * robots.ts — Política de rastreo
 *
 * Estrategia:
 * - Motores de búsqueda clásicos: acceso total (necesitan indexar todo para SEO).
 * - Bots de IA: solo la página principal "/$" donde está toda la info de la clínica.
 *   Así las IAs responden con datos de contacto, servicios y ubicación, sin exponer
 *   las páginas legales ni rutas internas.
 * - Regla general "*": acceso total excepto rutas internas de Next.js.
 *
 * NOTA: Las páginas legales tienen noindex en su metadata; no se bloquean aquí
 * para que los rastreadores puedan leer ese noindex correctamente.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ─── Motores de búsqueda clásicos — acceso total ────────────────────────
      {
        userAgent: "Googlebot",          // Google Search
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot-Image",    // Google Imágenes
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Bingbot",            // Bing Search
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "DuckDuckBot",        // DuckDuckGo
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Slurp",              // Yahoo Search
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Applebot",           // Apple Maps / Spotlight
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },

      // ─── Bots de IA — solo página principal ─────────────────────────────────
      // Allow: /$ = solo la URL raíz exacta (https://clinicarafaelgodoy.es/)
      // Disallow: / = bloquea todo lo demás
      {
        userAgent: "GPTBot",             // ChatGPT / OpenAI (búsqueda web)
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "OAI-SearchBot",      // OpenAI Search
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",       // ChatGPT navegación en tiempo real
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "ClaudeBot",          // Anthropic Claude (rastreo web)
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",       // Anthropic (entrenamiento)
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "PerplexityBot",      // Perplexity AI
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "PerplexityBot-User", // Perplexity (sesión de usuario)
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "Google-Extended",    // Google Gemini + AI Overviews
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "Meta-ExternalAgent", // Meta AI (Facebook, Instagram, WhatsApp)
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "Meta-ExternalFetcher", // Meta AI fetcher
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "Applebot-Extended",  // Apple Intelligence / Siri AI
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "msnbot",             // Microsoft Copilot (componente de entrenamiento)
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "cohere-ai",          // Cohere AI (Command R)
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "YouBot",             // You.com AI search
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "Brave",              // Brave Search + Leo AI
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "CCBot",              // Common Crawl (base de entrenamiento de GPT, LLaMA, etc.)
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "Bytespider",         // ByteDance / Doubao AI (TikTok)
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "Amazonbot",          // Amazon Alexa / Amazon Q
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "Diffbot",            // Diffbot Knowledge Graph (fuente de muchas IAs)
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "Baiduspider",        // Baidu AI (ERNIE Bot)
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "NaverBot",           // Naver Clova AI (Corea)
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "PetalBot",           // Huawei Search AI
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "Timpibot",           // Timpi Search AI (europeo)
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "omgili",             // Webz.io / fuente de datos para LLMs
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "omgilibot",          // Webz.io bot
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "img2dataset",        // Dataset de imágenes para entrenamiento de IA
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "Scrapy",             // Framework de scraping usado en pipelines de IA
        allow: "/$",
        disallow: "/",
      },
      {
        userAgent: "DataForSeoBot",      // DataForSEO (fuente de datos para IAs de marketing)
        allow: "/$",
        disallow: "/",
      },

      // ─── Regla general — acceso total para cualquier otro rastreador ────────
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${site.domain}/sitemap.xml`,
  };
}
