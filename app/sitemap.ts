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

  // オープン案内（日本語・英語のみ）
  for (const locale of ["ja", "en"]) {
    entries.push({
      url: `${baseUrl}/${locale}/opening`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          ja: `${baseUrl}/ja/opening`,
          en: `${baseUrl}/en/opening`,
        },
      },
    });
  }

  return entries;
}
