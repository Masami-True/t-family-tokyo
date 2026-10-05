import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 全クローラー共通ルール
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // AI検索クローラーを明示的に許可
      { userAgent: "GPTBot", allow: "/" },          // ChatGPT (OpenAI)
      { userAgent: "OAI-SearchBot", allow: "/" },   // OpenAI SearchBot
      { userAgent: "PerplexityBot", allow: "/" },   // Perplexity AI
      { userAgent: "ClaudeBot", allow: "/" },        // Claude (Anthropic)
      { userAgent: "anthropic-ai", allow: "/" },     // Anthropic
      { userAgent: "Googlebot", allow: "/" },        // Google (AI Overviews)
      { userAgent: "Google-Extended", allow: "/" }, // Google Gemini学習用
      { userAgent: "Bytespider", allow: "/" },       // ByteDance / TikTok AI
      { userAgent: "cohere-ai", allow: "/" },        // Cohere AI
      { userAgent: "Meta-ExternalAgent", allow: "/" }, // Meta AI
    ],
    sitemap: "https://t-family.tokyo/sitemap.xml",
  };
}
