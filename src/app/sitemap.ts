import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// Fecha de última modificación real del contenido.
// Actualizar manualmente cuando se publique contenido nuevo en la home.
const LAST_HOME_UPDATE = new Date("2026-04-11");
// Las páginas legales cambian rara vez; solo actualizar si se editan.
const LAST_LEGAL_UPDATE = new Date("2026-04-11");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.domain,
      lastModified: LAST_HOME_UPDATE,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${site.domain}/aviso-legal`,
      lastModified: LAST_LEGAL_UPDATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.domain}/politica-privacidad`,
      lastModified: LAST_LEGAL_UPDATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.domain}/politica-cookies`,
      lastModified: LAST_LEGAL_UPDATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
