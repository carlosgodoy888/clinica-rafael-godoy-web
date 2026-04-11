import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/**
 * robots.ts — Control de acceso para rastreadores web
 *
 * IMPORTANTE: Las páginas legales (politica-privacidad, politica-cookies, aviso-legal)
 * tienen noindex en su metadata. NO se bloquean aquí porque el rastreador necesita
 * leer el noindex para poder des-indexarlas correctamente.
 *
 * TIEMPOS ESTIMADOS PARA VER RESULTADOS:
 * - Google / Google Maps / Google AI Overviews:  1–4 semanas
 * - Bing / Microsoft Copilot:                    2–4 semanas
 * - Perplexity:                                  1–2 semanas
 * - ChatGPT (búsqueda web en tiempo real):       1–2 semanas
 * - ChatGPT (datos de entrenamiento):            varios meses (ciclo de re-entrenamiento)
 * - Claude (claude.ai con búsqueda web):         1–2 semanas
 * - Apple Maps / Siri:                           2–6 semanas
 * - Common Crawl (base de entrenamiento de LLMs): 1–2 meses (snapshots mensuales)
 *
 * QUÉ DEBES HACER TÚ:
 * 1. Verificar/reclamar el perfil en Google Business Profile (maps.google.com/business)
 *    → Es lo más importante para aparecer en búsquedas de "dentista córdoba" con teléfono.
 * 2. Enviar sitemap manualmente en Google Search Console (search.google.com/search-console)
 *    → Acelera la re-indexación tras estos cambios.
 * 3. Reclamar perfil en Bing Places (bingplaces.com) → alimenta Microsoft Copilot.
 * 4. Reclamar o actualizar ficha en Doctoralia (doctoralia.es)
 *    → Directorio líder de salud en España; aparece en búsquedas de dentistas.
 * 5. Añadir la clínica en Apple Maps Connect (mapsconnect.apple.com) → Siri + Apple Maps.
 * 6. Verificar ficha en Yelp (yelp.es) → usado por algunos bots de IA como fuente.
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ─── Motores de búsqueda principales ───────────────────────────────────
      {
        // Google Search — el más importante para SEO local
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Google Images — para que aparezcan las fotos de la clínica
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Google AI Overviews y Gemini
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Bing Search + Microsoft Copilot
        userAgent: ["Bingbot", "msnbot", "msnbot-media"],
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // DuckDuckGo
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Yahoo Search
        userAgent: "Slurp",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Apple Maps / Siri Suggestions
        userAgent: "Applebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Yandex (buscador ruso con presencia en Europa)
        userAgent: "YandexBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },

      // ─── IA: búsqueda web en tiempo real ───────────────────────────────────
      {
        // ChatGPT (OpenAI) — búsqueda web y entrenamiento
        userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User"],
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Claude (Anthropic) — búsqueda web y entrenamiento
        userAgent: ["ClaudeBot", "anthropic-ai", "Claude-Web"],
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Perplexity AI — motor de búsqueda con IA muy usado en España
        userAgent: ["PerplexityBot", "PerplexityBot-User"],
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Meta AI (Facebook, Instagram, WhatsApp AI)
        userAgent: ["Meta-ExternalAgent", "Meta-ExternalFetcher"],
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Cohere — IA empresarial
        userAgent: "cohere-ai",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // You.com — buscador con IA
        userAgent: "YouBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Brave Search — buscador privado con IA integrada
        userAgent: "Brave",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Common Crawl — base de datos usada en el entrenamiento de la mayoría de LLMs
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },

      // ─── Redes sociales (previsualizaciones de enlaces con teléfono/datos) ──
      {
        // Facebook e Instagram — previsualización de enlaces con datos de contacto
        userAgent: ["facebookexternalhit", "Facebot"],
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Twitter / X
        userAgent: "Twitterbot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // LinkedIn
        userAgent: "LinkedInBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // WhatsApp — previsualización al compartir el enlace de la clínica
        userAgent: "WhatsApp",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Telegram — previsualización de enlace
        userAgent: "TelegramBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },

      // ─── Directorios y plataformas de salud ────────────────────────────────
      {
        // Doctoralia — directorio líder de salud en España
        userAgent: "Doctoralia",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Yelp — directorio de negocios locales usado como fuente por algunas IAs
        userAgent: "Yelp",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },

      // ─── Fiabilidad y seguridad (mejoran la reputación del dominio) ─────────
      {
        // Google Safe Browsing — verifica que el sitio es seguro
        userAgent: "Google-Safety",
        allow: "/",
        disallow: [],
      },

      // ─── Regla general para cualquier otro rastreador ───────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
    ],
    sitemap: `${site.domain}/sitemap.xml`,
  };
}
