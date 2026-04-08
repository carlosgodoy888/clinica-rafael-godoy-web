import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: site.domain,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${site.domain}/aviso-legal`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.domain}/politica-privacidad`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.domain}/politica-cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
