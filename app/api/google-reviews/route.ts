import { NextResponse } from "next/server";

export const revalidate = 3600; // 1 hour cache

interface GoogleAPIReview {
  relativePublishTimeDescription: string;
  rating: number;
  text?: { text: string; languageCode: string };
  originalText?: { text: string; languageCode: string };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri?: string;
  };
  publishTime: string;
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({ reviews: null });
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=ja`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "reviews",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.error("Google Places API error:", res.status);
      return NextResponse.json({ reviews: null });
    }

    const data = await res.json();
    const reviews: GoogleAPIReview[] = data.reviews ?? [];

    // Sort newest first by publishTime
    reviews.sort(
      (a, b) =>
        new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime()
    );

    return NextResponse.json({ reviews });
  } catch (err) {
    console.error("Google Places API fetch failed:", err);
    return NextResponse.json({ reviews: null });
  }
}
