import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "../globals.css";

export const metadata = {
  title:
    "T-Family | 中古ブランドバッグ専門店 東京・新橋 | Pre-Owned Luxury Brand Bags Tokyo",
  description:
    "T-Family株式会社は東京・新橋の中古ブランドバッグ専門店。CHANEL BAG, HERMÈS BAG, LOUIS VUITTON BAG, GUCCI BAG, PRADA BAG, FENDI BAG, DIOR BAGなど正規品のみ取扱い。Entrupy AI鑑定・全額返金保証付き。Pre-owned luxury brand bags in Tokyo. Secondhand shops near Ginza & Shimbashi. Live Seller program available.",
  keywords: [
    "T-Family",
    "中古ブランドショップ",
    "中古ブランド",
    "中古ブランドバッグ",
    "ブランドバッグ",
    "中古ブランド 銀座",
    "中古ブランド 新橋",
    "銀座おすすめ",
    "中古ブランドショップ 銀座",
    "中古ブランド 西新橋",
    "ライバー",
    "ライブセラー",
    "BRAND BAG",
    "Pre-owned luxury brand",
    "Pre-owned luxury bags Tokyo",
    "Secondhand shops",
    "Secondhand luxury Tokyo",
    "Live Seller",
    "Live Commerce Japan",
    "CHANEL BAG",
    "HERMÈS BAG",
    "HERMES BAG",
    "LOUIS VUITTON BAG",
    "GUCCI BAG",
    "PRADA BAG",
    "FENDI BAG",
    "DIOR BAG",
    "YSL BAG",
    "GOYARD BAG",
    "BURBERRY BAG",
    "BALENCIAGA BAG",
    "BVLGARI BAG",
    "CÉLINE BAG",
    "CELINE BAG",
    "MIU MIU BAG",
    "BOTTEGA VENETA BAG",
    "luxury bags Tokyo",
    "authentic brand bags Japan",
    "Tokyo luxury secondhand",
    "Shimbashi brand shop",
    "Ginza pre-owned luxury",
    "Entrupy certified bags",
    "inbound shopping Tokyo",
    "tourist luxury shopping Japan",
  ],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "T-Family | 中古ブランドバッグ専門店 東京・新橋",
    description:
      "CHANEL, HERMÈS, LOUIS VUITTON等の正規中古ブランドバッグ。Entrupy AI鑑定・全額返金保証。東京・新橋の実店舗 & オンラインショップ。",
    url: "https://t-family.tokyo",
    siteName: "T-Family Inc.",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://t-family.tokyo/images/logo.png",
        width: 400,
        height: 400,
        alt: "T-Family Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "T-Family | Pre-Owned Luxury Brand Bags Tokyo",
    description:
      "Authentic CHANEL, HERMÈS, LOUIS VUITTON bags from Tokyo. Entrupy certified. Full refund guarantee.",
  },
  alternates: {
    canonical: "https://t-family.tokyo",
    languages: {
      "ja": "https://t-family.tokyo/ja",
      "en": "https://t-family.tokyo/en",
      "zh": "https://t-family.tokyo/zh",
      "ko": "https://t-family.tokyo/ko",
      "es": "https://t-family.tokyo/es",
      "fr": "https://t-family.tokyo/fr",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@400;500;700&family=Noto+Serif+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "T-Family株式会社",
              alternateName: ["T-Family Inc.", "T-Family", "ティーファミリー"],
              description:
                "東京・新橋の中古ブランドバッグ専門店。CHANEL, HERMÈS, LOUIS VUITTON, GUCCI等の正規品を取扱い。Entrupy AI鑑定・全額返金保証付き。Pre-owned luxury brand bags in Tokyo near Ginza.",
              url: "https://t-family.tokyo",
              telephone: "+81-3-6823-2699",
              email: "info@t-family.tokyo",
              address: {
                "@type": "PostalAddress",
                streetAddress: "西新橋1丁目18-11 ル・グラシエルBLDG 15号館5F",
                addressLocality: "港区",
                addressRegion: "東京都",
                postalCode: "105-0003",
                addressCountry: "JP",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 35.668,
                longitude: 139.7515,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday",
                  "Friday", "Saturday", "Sunday",
                ],
                opens: "11:00",
                closes: "21:00",
              },
              priceRange: "¥¥¥",
              image: "https://t-family.tokyo/images/logo.png",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "21",
                bestRating: "5",
              },
              sameAs: [
                "https://www.instagram.com/tfamily.inc/",
                "https://www.facebook.com/profile.php?id=61576088344723",
                "https://www.youtube.com/@T-Family-727",
                "https://x.com/NextStory7",
                "https://nextstory.jp/",
                "https://t-secondhands.jp/",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Pre-Owned Luxury Brand Bags",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "CHANEL BAG", category: "Pre-owned Luxury Bags" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "HERMÈS BAG", category: "Pre-owned Luxury Bags" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "LOUIS VUITTON BAG", category: "Pre-owned Luxury Bags" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "GUCCI BAG", category: "Pre-owned Luxury Bags" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "PRADA BAG", category: "Pre-owned Luxury Bags" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "FENDI BAG", category: "Pre-owned Luxury Bags" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "DIOR BAG", category: "Pre-owned Luxury Bags" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "YSL BAG", category: "Pre-owned Luxury Bags" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "GOYARD BAG", category: "Pre-owned Luxury Bags" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "BURBERRY BAG", category: "Pre-owned Luxury Bags" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "BALENCIAGA BAG", category: "Pre-owned Luxury Bags" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "BVLGARI BAG", category: "Pre-owned Luxury Bags" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "CÉLINE BAG", category: "Pre-owned Luxury Bags" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "MIU MIU BAG", category: "Pre-owned Luxury Bags" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "BOTTEGA VENETA BAG", category: "Pre-owned Luxury Bags" } },
                ],
              },
              paymentAccepted: "VISA, MasterCard, JCB, AMEX, PayPay, Alipay, PayPal, WISE, Apple Pay, Google Pay, Cash, Bank Transfer",
              currenciesAccepted: "JPY",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: { "@type": "GeoCoordinates", latitude: 35.668, longitude: 139.7515 },
                geoRadius: "50000",
              },
              knowsLanguage: ["ja", "en", "zh", "ko", "es", "fr"],
            }),
          }}
        />
      </head>
      <body className="font-[DM_Sans] bg-offwhite text-text antialiased">
        <GoogleAnalytics />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
