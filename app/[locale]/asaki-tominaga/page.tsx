import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OG_LOCALE_MAP: Record<string, string> = {
  ja: "ja_JP", en: "en_US", zh: "zh_CN", ko: "ko_KR", es: "es_ES", fr: "fr_FR",
};

const AFFILIATIONS = [
  { title: "代表取締役", company: "T-Family株式会社" },
  { title: "代表取締役会長", company: "株式会社SPREAD" },
  { title: "評議員", company: "一般財団法人ゆめいく" },
];

export function generateStaticParams() {
  return ["ja", "en", "zh", "ko", "es", "fr"].map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL("https://t-family.tokyo"),
    title: "富永 朝樹 | Asaki Tominaga",
    description:
      "T-Family株式会社 代表取締役・富永 朝樹のプロフィール。株式会社SPREAD創業者。LIVEコマースで日本の「よきもの」を世界に届けることを使命とする。",
    alternates: {
      canonical: `https://t-family.tokyo/${locale}/asaki-tominaga`,
      languages: {
        ja: "https://t-family.tokyo/ja/asaki-tominaga",
        en: "https://t-family.tokyo/en/asaki-tominaga",
        zh: "https://t-family.tokyo/zh/asaki-tominaga",
        ko: "https://t-family.tokyo/ko/asaki-tominaga",
        es: "https://t-family.tokyo/es/asaki-tominaga",
        fr: "https://t-family.tokyo/fr/asaki-tominaga",
        "x-default": "https://t-family.tokyo/ja/asaki-tominaga",
      },
    },
    openGraph: {
      url: `https://t-family.tokyo/${locale}/asaki-tominaga`,
      locale: OG_LOCALE_MAP[locale] ?? "ja_JP",
      title: "富永 朝樹 | Asaki Tominaga — T-Family株式会社",
      description:
        "T-Family株式会社 代表取締役・富永 朝樹。日本の信頼と品質をLIVEで世界へ。",
      images: ["/opengraph-image"],
    },
  };
}

export default async function AsakiTominagaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      {/* Person JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://t-family.tokyo/ja/asaki-tominaga#person",
            name: "富永 朝樹",
            alternateName: ["Asaki Tominaga", "とみなが あさき"],
            jobTitle: "代表取締役",
            description:
              "2006年に株式会社SPREADを創業。2020年にT-Family株式会社を設立。LIVEコマースを通じて日本と世界の顧客をつなぐ事業を推進。",
            image: "https://t-family.tokyo/images/ceo-portrait.jpg",
            url: "https://t-family.tokyo/ja/asaki-tominaga",
            worksFor: [
              {
                "@type": "Organization",
                "@id": "https://t-family.tokyo/#organization",
                name: "T-Family株式会社",
                url: "https://t-family.tokyo",
              },
              {
                "@type": "Organization",
                name: "株式会社SPREAD",
              },
            ],
            memberOf: {
              "@type": "Organization",
              name: "一般財団法人ゆめいく",
            },
            sameAs: [
              "https://t-family.tokyo",
              "https://www.instagram.com/tfamily.inc/",
              "https://www.facebook.com/profile.php?id=61576088344723",
            ],
          }),
        }}
      />
      {/* BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "T-Vintage GINZA",
                item: `https://t-family.tokyo/${locale}`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "富永 朝樹",
                item: `https://t-family.tokyo/${locale}/asaki-tominaga`,
              },
            ],
          }),
        }}
      />

      <Header />

      <main className="bg-[#111111] min-h-screen">

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="pt-32 pb-16 px-6 text-center border-b border-white/[0.07]">
          <p className="text-[9px] tracking-[0.45em] text-gold/50 uppercase mb-6">
            Representative Director · T-Family Inc.
          </p>
          <h1
            className="font-[Noto_Serif_JP] text-4xl sm:text-5xl lg:text-6xl text-white mb-4 tracking-[0.05em]"
            translate="no"
          >
            富永 朝樹
          </h1>
          <p
            className="font-heading text-gold text-xl sm:text-2xl tracking-[0.3em]"
            translate="no"
          >
            Asaki Tominaga
          </p>
          <p className="text-xs text-white/30 mt-2 tracking-[0.25em] font-[Noto_Sans_JP] font-light">
            とみなが あさき
          </p>
        </section>

        {/* ── Profile ────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden max-w-[280px] sm:max-w-xs mx-auto lg:max-w-none aspect-[3/4]">
                <Image
                  src="/images/ceo-portrait.jpg"
                  alt="富永 朝樹 – T-Family株式会社 代表取締役"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 320px, 400px"
                  priority
                />
              </div>
              {/* Name below photo on desktop */}
              <div className="hidden lg:block mt-6 text-center">
                <p className="text-xs text-white/40 tracking-widest font-[Noto_Sans_JP]" translate="no">
                  富永 朝樹
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3 space-y-10">

              {/* Affiliations */}
              <div>
                <p className="text-[9px] tracking-[0.35em] text-gold/50 uppercase mb-5">
                  Affiliations
                </p>
                <ul className="space-y-3">
                  {AFFILIATIONS.map((item) => (
                    <li key={item.company} className="flex items-center gap-3">
                      <span className="text-[10px] text-gold/70 tracking-wider border border-gold/25 px-2.5 py-1 whitespace-nowrap font-[Noto_Sans_JP]">
                        {item.title}
                      </span>
                      <span className="text-sm text-white/75 font-[Noto_Sans_JP] font-light tracking-wide">
                        {item.company}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="w-10 h-px bg-gold/30" />

              {/* Profile text */}
              <div>
                <p className="text-[9px] tracking-[0.35em] text-gold/50 uppercase mb-5">
                  Profile
                </p>
                <div className="space-y-5 text-[14px] text-white/65 font-[Noto_Sans_JP] font-light leading-[2.1]">
                  <p>
                    2006年に株式会社SPREADを創業しました。同社では、自動車用品ブランド「SPHERE LIGHT（スフィアライト）」をはじめ、商品企画、ブランド開発、EC・販売事業を手がけています。
                  </p>
                  <p>
                    2020年にはT-Family株式会社を設立しました。現在は中古ラグジュアリーブランド品のLIVEコマース、EC、店舗販売、越境販売を中心に、日本と海外の顧客をつなぐ事業を率いています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Message ────────────────────────────────────────── */}
        <section className="border-t border-white/[0.07] bg-[#0e0e0c]">
          <div className="max-w-2xl mx-auto px-6 py-16 sm:py-28">

            <p className="text-[9px] tracking-[0.45em] text-gold/50 uppercase mb-12 text-center">
              Message
            </p>

            {/* Lead quote */}
            <div className="text-center mb-14">
              <span className="block font-heading text-gold/20 text-6xl leading-none select-none mb-1">
                &ldquo;
              </span>
              <p className="font-[Noto_Serif_JP] text-xl sm:text-2xl text-gold leading-relaxed tracking-wider">
                日本の信頼と品質を、<br className="sm:hidden" />LIVEで世界に。
              </p>
            </div>

            {/* Body */}
            <div className="space-y-6 text-[14px] text-white/60 font-[Noto_Sans_JP] font-light leading-[2.2]">
              <p>
                商品の魅力は、写真や説明文だけではすべてを伝えきれません。手に取ったときの質感や、届ける人の想い、お店の空気感まで含めて、その価値は成り立っていると考えています。
              </p>
              <p>
                T-Familyでは、LIVEコマースを通じて日本と世界の顧客を直接つなぎ、真贋確認を徹底した商品と、日本ならではの丁寧なサービスをお届けしています。
              </p>
              <p>
                これからはラグジュアリー商品にとどまらず、日本が誇る商品や文化、地域の価値を世界へ届ける事業へと広げていきます。日本の「よきもの」を世界に届ける挑戦を、これからも続けてまいります。
              </p>
            </div>

            {/* Signature */}
            <div className="mt-14 pt-8 border-t border-white/[0.07] text-right space-y-1">
              <p className="text-[11px] text-white/35 tracking-widest font-[Noto_Sans_JP]">
                T-Family株式会社
              </p>
              <p className="text-sm text-white/60 tracking-wider font-[Noto_Sans_JP]">
                代表取締役　富永 朝樹
              </p>
            </div>
          </div>
        </section>

        {/* ── Back link ──────────────────────────────────────── */}
        <section className="border-t border-white/[0.07] py-10 px-6 text-center">
          <a
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] text-gold/50 hover:text-gold transition-colors uppercase"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            T-Vintage GINZA
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}
