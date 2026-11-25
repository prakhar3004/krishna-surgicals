import type { MetadataRoute } from "next";
import { businessConfig } from "@/config/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = businessConfig.siteUrl.replace(/\/$/, "");
  return [
    {
      url: `${base}/`,
      lastModified: "2026-11-25",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
