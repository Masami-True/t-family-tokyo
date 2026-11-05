import { NextResponse } from "next/server";
export const revalidate = 3600;

const TA_URL =
  "https://www.tripadvisor.jp/Attraction_Review-g1066444-d34714545-Reviews-T_Vintage_GINZA-Chuo_Tokyo_Tokyo_Prefecture_Kanto.html";

interface TAReview {
  name: string;
  rating: number;
  date: string;
  text: string;
}

function stripTags(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function parseReviews(html: string): TAReview[] {
  const reviews: TAReview[] = [];

  // Split on review card boundaries
  const cardSections = html.split(/data-automation="reviewCard"/);

  for (let i = 1; i < cardSections.length; i++) {
    const section = cardSections[i];

    // Rating from aria-label (stable attribute)
    const ratingMatch = section.match(/バブル評価 5 段階中 (\d)/);
    const rating = ratingMatch ? parseInt(ratingMatch[1]) : 5;

    // Plain text of the card section
    const plain = stripTags(section);

    // Reviewer name: appears before "投稿\d+件" or "0 投稿"
    const nameMatch = plain.match(/^\s*([^\n\r0-9][^\n\r]*?)\s+(?:\S+,\s+\S+\s+)?投稿\d+件/);
    const name = (nameMatch?.[1] ?? "").trim().replace(/^\s*>\s*/, "");
    if (!name) continue;

    // Posting date: 投稿日：YYYY年MM月DD日
    const postDateMatch = plain.match(/投稿日[：:]\s*(\d{4}年\d{1,2}月)/);
    const date = postDateMatch?.[1] ?? "";

    // Review body: text between "YYYY年M月 • [type]" marker and staff response or 投稿日：
    const bodyMatch = plain.match(
      /\d{4}年\d{1,2}月\s*[•·]\s*\S+\s+([\s\S]+?)(?=\s*(?:続きを読む|投稿日[：:]|T-Vintage GINZA Staff))/
    );
    const text = (bodyMatch?.[1] ?? "").trim();
    if (!text) continue;

    // Skip staff responses that leaked into name
    if (name.includes("T-Vintage") || name.includes("Staff")) continue;

    reviews.push({ name, rating, date, text });
  }

  return reviews;
}

export async function GET() {
  try {
    const res = await fetch(TA_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "ja-JP,ja;q=0.9",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Cache-Control": "no-cache",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return NextResponse.json({ reviews: null });

    const html = await res.text();
    const reviews = parseReviews(html);

    if (reviews.length === 0) return NextResponse.json({ reviews: null });

    return NextResponse.json({ reviews });
  } catch {
    return NextResponse.json({ reviews: null });
  }
}
