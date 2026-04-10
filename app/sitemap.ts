import { MetadataRoute } from "next";

const locales = ["en", "ja", "zh", "ko", "es", "fr"];
const baseUrl = "https://t-family.tokyo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/liveseller", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/company", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/tokusyohou", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
  }

  return entries;
}
