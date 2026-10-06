import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "../globals.css";

export const metadata = {
  metadataBase: new URL("https://t-family.tokyo"),
  title: {
    default:
      "T-Vintage GINZA | T-Family株式会社 | 中古ブランドバッグ専門店 東京・銀座 | Pre-Owned Luxury Bags",
    template: "%s | T-Vintage GINZA",
  },
  description:
    "T-Vintage GINZA（T-Family株式会社）は東京・銀座の中古ブランドバッグ専門店。CHANEL・HERMÈS・LOUIS VUITTON・GUCCI・PRADA・FENDI・DIOR など正規品のみ取扱い。Entrupy AI鑑定・全額返金保証付き。Pre-owned luxury brand bags in Ginza, Tokyo.",
  keywords: [
    "T-Vintage",
    "T-Vintage GINZA",
    "T-Vintage 銀座",
    "T-Family",
    "中古ブランドショップ",
    "中古ブランド",
    "中古ブランドバッグ",
    "ブランドバッグ",
    "中古ブランド 銀座",
    "中古ブランド 銀座3丁目",
    "銀座おすすめ",
    "中古ブランドショップ 銀座",
    "中古ブランド 銀座3丁目",
    "ライバー",
    "ライブセラー",
    "バイヤー",
    "リセラー",
    "卸",
    "卸売り",
    "Buyer",
    "Reseller",
    "Wholesale",
    "Wholesaler",
    "Distributor",
    "Export",
    "越境EC",
    "海外仕入れ",
    "中古ブランド 仕入れ",
    "ブランドバッグ 卸",
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
    "Ginza brand shop",
    "Ginza pre-owned luxury",
    "Entrupy certified bags",
    "inbound shopping Tokyo",
    "tourist luxury shopping Japan",
  ],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "T-Vintage GINZA | 中古ブランドバッグ専門店 東京・銀座",
    description:
      "T-Vintage GINZA（T-Family株式会社）。CHANEL, HERMÈS, LOUIS VUITTON等の正規中古ブランドバッグ。Entrupy AI鑑定・全額返金保証。東京・銀座の実店舗。",
    url: "https://t-family.tokyo",
    siteName: "T-Family Inc.",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "T-Vintage GINZA | Pre-Owned Luxury Brand Bags in Ginza, Tokyo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "T-Vintage GINZA | Pre-Owned Luxury Brand Bags Tokyo",
    description:
      "Authentic CHANEL, HERMÈS, LOUIS VUITTON bags from Ginza, Tokyo. Entrupy AI certified. Full refund guarantee.",
    images: ["/opengraph-image"],
  },
  alternates: {
    languages: {
      "ja": "https://t-family.tokyo/ja",
      "en": "https://t-family.tokyo/en",
      "zh": "https://t-family.tokyo/zh",
      "ko": "https://t-family.tokyo/ko",
      "es": "https://t-family.tokyo/es",
      "fr": "https://t-family.tokyo/fr",
      "x-default": "https://t-family.tokyo/en",
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

export function generateStaticParams() {
  return ["ja", "en", "zh", "ko", "es", "fr"].map((locale) => ({ locale }));
}

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
    <html lang={locale} translate="no" className="notranslate" suppressHydrationWarning>
      <head>
        {/* Prevent Google Translate from auto-translating */}
        <meta name="google" content="notranslate" />
        {/* Geo tags — Apple Maps, Bing, travel aggregators */}
        <meta name="geo.region" content="JP-13" />
        <meta name="geo.placename" content="Ginza, Chuo-ku, Tokyo, Japan" />
        <meta name="geo.position" content="35.6715;139.7648" />
        <meta name="ICBM" content="35.6715, 139.7648" />
        {/* rel=me: SNSプロフィール紐付け検証 */}
        <link rel="me" href="https://www.instagram.com/tfamily.inc.japan/" />
        <link rel="me" href="https://www.facebook.com/profile.php?id=61576088344723" />
        <link rel="me" href="https://x.com/NextStory7" />
        <link rel="me" href="https://www.youtube.com/@T-Family-727" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@400;500;700&family=Noto+Sans+JP:wght@200;300;400;500&family=Noto+Serif+JP:wght@200;300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["ClothingStore", "LocalBusiness"],
              "@id": "https://t-family.tokyo/#localbusiness",
              name: "T-Family株式会社",
              alternateName: ["T-Vintage", "T-Vintage GINZA", "T-Family Inc.", "T-Family", "ティーファミリー", "ティーヴィンテージ", "T-Vintage Ginza", "ティービンテージ銀座"],
              description:
                "東京・銀座の中古ブランドバッグ専門店。CHANEL, HERMÈS, LOUIS VUITTON, GUCCI等の正規品を取扱い。Entrupy AI鑑定・全額返金保証付き。Pre-owned luxury brand bags in Ginza, Tokyo.",
              url: "https://t-family.tokyo",
              telephone: "+81-3-6823-2699",
              email: "info@t-family.tokyo",
              hasMap: "https://maps.google.com/maps?q=T-Family+T-Vintage+%E9%8A%80%E5%BA%A73-12-17%EF%BC%8C%E4%B8%AD%E5%A4%AE%E5%8C%BA%EF%BC%8C%E6%9D%B1%E4%BA%AC%E9%83%BD+104-0061",
              logo: {
                "@type": "ImageObject",
                url: "https://t-family.tokyo/images/logo.png",
                width: 400,
                height: 400,
              },
              image: [
                "https://t-family.tokyo/images/store-cropped.jpg",
                "https://t-family.tokyo/images/logo.png",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "銀座３－１２－１７ T-Familyビル",
                addressLocality: "中央区",
                addressRegion: "東京都",
                postalCode: "104-0061",
                addressCountry: "JP",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 35.6715,
                longitude: 139.7648,
              },
              openingHours: "Mo-Sa 11:00-20:00",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                ],
                opens: "11:00",
                closes: "20:00",
              },
              priceRange: "¥¥¥",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "21",
                bestRating: "5",
              },
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Multilingual Staff (Japanese / English / Chinese / Korean / Spanish / French)", value: true },
                { "@type": "LocationFeatureSpecification", name: "多言語対応（日・英・中・韓・西・仏）", value: true },
                { "@type": "LocationFeatureSpecification", name: "Credit Card Accepted (VISA / Mastercard / AMEX / JCB)", value: true },
                { "@type": "LocationFeatureSpecification", name: "Alipay & WeChat Pay Accepted", value: true },
                { "@type": "LocationFeatureSpecification", name: "PayPal & WISE Accepted", value: true },
                { "@type": "LocationFeatureSpecification", name: "PayPay Accepted", value: true },
                { "@type": "LocationFeatureSpecification", name: "Entrupy AI Authentication — Every Item Verified", value: true },
                { "@type": "LocationFeatureSpecification", name: "Full Refund Guarantee if Inauthentic", value: true },
                { "@type": "LocationFeatureSpecification", name: "International Shipping Available", value: true },
                { "@type": "LocationFeatureSpecification", name: "Tourist / Inbound Friendly", value: true },
                { "@type": "LocationFeatureSpecification", name: "Wholesale & Buyer Orders Welcome", value: true },
              ],
              sameAs: [
                "https://www.instagram.com/tfamily.inc.japan/",
                "https://www.facebook.com/profile.php?id=61576088344723",
                "https://www.youtube.com/@T-Family-727",
                "https://x.com/NextStory7",
                "https://t-secondhands.jp/",
                "https://www.whatnot.com/user/tfamilycoltd",
                "https://www.tripadvisor.jp/Attraction_Review-g1066444-d34714545-Reviews-T_Vintage-Chuo_Tokyo_Tokyo_Prefecture_Kanto.html",
                "https://g.page/r/CT5WXUVxa3XmEAE",
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
              areaServed: [
                { "@type": "City", name: "東京", alternateName: "Tokyo" },
                { "@type": "AdministrativeArea", name: "銀座", alternateName: "Ginza" },
                { "@type": "AdministrativeArea", name: "中央区", alternateName: "Chuo-ku" },
                { "@type": "Country", name: "Japan" },
              ],
              availableLanguage: [
                { "@type": "Language", name: "Japanese", alternateName: "日本語" },
                { "@type": "Language", name: "English" },
                { "@type": "Language", name: "Chinese", alternateName: "中文" },
                { "@type": "Language", name: "Korean", alternateName: "한국어" },
                { "@type": "Language", name: "Spanish", alternateName: "Español" },
                { "@type": "Language", name: "French", alternateName: "Français" },
              ],
            }),
          }}
        />
        {/* WebSite + Organization schema - helps "T-Family" brand recognition + sitelinks searchbox */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://t-family.tokyo/#organization",
                  name: "T-Family",
                  legalName: "T-Family株式会社",
                  alternateName: ["T-Family Inc.", "T-Family株式会社", "ティーファミリー"],
                  url: "https://t-family.tokyo",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://t-family.tokyo/images/logo.png",
                    width: 400,
                    height: 400,
                  },
                  foundingDate: "2020-11-27",
                  founder: { "@type": "Person", name: "富永 朝樹", alternateName: "Asaki Tominaga" },
                  sameAs: [
                    "https://www.instagram.com/tfamily.inc.japan/",
                    "https://www.facebook.com/profile.php?id=61576088344723",
                    "https://www.youtube.com/@T-Family-727",
                    "https://x.com/NextStory7",
                    "https://t-secondhands.jp/",
                    "https://www.whatnot.com/user/tfamilycoltd",
                    "https://www.tripadvisor.jp/Attraction_Review-g1066444-d34714545-Reviews-T_Vintage-Chuo_Tokyo_Tokyo_Prefecture_Kanto.html",
                    "https://g.page/r/CT5WXUVxa3XmEAE",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+81-3-6823-2699",
                    email: "info@t-family.tokyo",
                    contactType: "customer service",
                    availableLanguage: ["Japanese", "English", "Chinese", "Korean", "Spanish", "French"],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://t-family.tokyo/#website",
                  url: "https://t-family.tokyo",
                  name: "T-Family",
                  alternateName: "T-Vintage GINZA",
                  description: "中古ブランドバッグ専門店 東京・銀座 | Pre-Owned Luxury Brand Bags Tokyo",
                  publisher: { "@id": "https://t-family.tokyo/#organization" },
                  inLanguage: ["ja", "en", "zh", "ko", "es", "fr"],
                  speakable: {
                    "@type": "SpeakableSpecification",
                    cssSelector: ["h1", "h2", "[data-speakable]"],
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://t-family.tokyo/ja?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
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
