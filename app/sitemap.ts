import { MetadataRoute } from "next";

const locales = ["en", "ja", "zh", "ko", "es", "fr"];
const baseUrl = "https://t-family.tokyo";
const lastMod = new Date("2026-10-06");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/asaki-tominaga", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/liveseller", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/company", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/tokusyohou", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    // hreflang map: all locales for this page + x-default → /en
    const langMap = Object.fromEntries(
      locales.map((l) => [l, `${baseUrl}/${l}${page.path}`])
    );
    langMap["x-default"] = `${baseUrl}/en${page.path}`;

    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: lastMod,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages: langMap },
      });
    }
  }

  // オープン案内（日本語・英語のみ）
  const openingLangMap = {
    ja: `${baseUrl}/ja/opening`,
    en: `${baseUrl}/en/opening`,
    "x-default": `${baseUrl}/en/opening`,
  };
  for (const locale of ["ja", "en"]) {
    entries.push({
      url: `${baseUrl}/${locale}/opening`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: openingLangMap },
    });
  }

  return entries;
}
