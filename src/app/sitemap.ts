import type { MetadataRoute } from "next";
import { site } from "@/config/site";


const LAST_HOME_UPDATE = new Date("2026-04-11");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.domain,
      lastModified: LAST_HOME_UPDATE,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}