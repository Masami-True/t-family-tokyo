import type { Metadata, Viewport } from "next";
import { redirect } from "next/navigation";
import { socialLinks, navItems } from "@/lib/social-links";
import { COPY, type Lang } from "./copy";

// T-Vintage（produced by T-Family）グランドオープン案内（共有リンク用・日本語／英語）
// 共有URL: https://t-family.tokyo/opening（ブラウザの言語設定で /ja・/en に自動で振り分け）

const ORIGIN = "https://t-family.tokyo";
const pageUrl = (lang: Lang) => `${ORIGIN}/${lang}/opening`;
const OG_IMAGE = `${ORIGIN}/images/opening/og-image.jpg`;

const ADDRESS = "〒104-0061 東京都中央区銀座3-12-17 T-Familyビル";
const MAP_QUERY = "東京都中央区銀座3-12-17 T-Familyビル";
const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(
  "東京都中央区銀座3-12-17"
)}+${encodeURIComponent("T-Familyビル")}&output=embed`;
// 公式サイトのフッターと同じ Google ビジネスプロフィール（place_id）を開く
const MAP_OPEN = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `T-Vintage ${MAP_QUERY}`
)}&query_place_id=ChIJocGs4m6LGGARPlZdRXFrdeY`;
// 口コミ投稿（公式サイトのフッターと同じ Google クチコミ投稿リンク）
const GOOGLE_REVIEW_HREF = "https://g.page/r/CT5WXUVxa3XmEAE/review";
const tripadvisorHref = (lang: Lang) =>
  `https://www.tripadvisor.${lang === "ja" ? "jp" : "com"}/Attraction_Review-g1066444-d34714545-Reviews-T_Vintage-Chuo_Tokyo_Tokyo_Prefecture_Kanto.html`;
const TEL_HREF = "tel:0368232699";

const gcalHref = (lang: Lang) =>
  `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: "TEMPLATE",
    text: "T-Vintage OPENING DAYS",
    dates: "20261024T110000/20261025T200000",
    ctz: "Asia/Tokyo",
    location: ADDRESS,
    details: `${COPY[lang].calendarDetails}\n${pageUrl(lang)}`,
  }).toString()}`;

// 案内文がある言語。それ以外（zh/ko/es/fr）は英語版へ
const toLang = (locale: string): Lang | null =>
  locale === "ja" || locale === "en" ? locale : null;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#141414",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const lang = toLang((await params).locale) ?? "en";
  const t = COPY[lang];
  return {
    title: { absolute: t.htmlTitle },
    description: t.description,
    alternates: {
      canonical: pageUrl(lang),
      languages: { ja: pageUrl("ja"), en: pageUrl("en"), "x-default": pageUrl("ja") },
    },
    openGraph: {
      title: t.htmlTitle,
      description: t.description,
      url: pageUrl(lang),
      siteName: "T-Family Inc.",
      locale: t.ogLocale,
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "T-Vintage produced by T-Family GRAND OPEN 2026.10.24 SAT 11:00",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.htmlTitle,
      description: t.description,
      images: [OG_IMAGE],
    },
  };
}

// 左右のノッチ領域に文字がかからないよう、最低 24px と safe-area の大きい方を取る
const GUTTER =
  "pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))]";

const BTN =
  "flex min-h-12 w-full items-center justify-center gap-2.5 px-5 py-3 text-sm tracking-[0.1em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";
const BTN_OUTLINE = `${BTN} border border-[#1A1A1A]/70 hover:border-[#86691C] hover:text-[#86691C] focus-visible:outline-[#1A1A1A]`;

// Cormorant Garamond の「-」は字形が斜めに上がるため、英字ロゴ部分は水平の罫で描く
// low: 「produced by T-Family」のような小文字主体の行では、罫を小文字の中心の高さに下げる
function Hyphen({ low = false }: { low?: boolean }) {
  return (
    <>
      <span className="sr-only">-</span>
      <span
        aria-hidden="true"
        className={`mx-[0.05em] inline-block h-[0.06em] min-h-px w-[0.3em] bg-current align-baseline ${
          low ? "-translate-y-[0.19em]" : "-translate-y-[0.25em]"
        }`}
      />
    </>
  );
}

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 shrink-0">
      <path d={d} />
    </svg>
  );
}

const SPARKLE_PATH =
  "M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0z";

// 肩の力を抜いた“ひとこと”。本文の流れの中で目に留まるよう、小さな札（ラベル）付きの囲みで置く
function Aside({
  children,
  label,
  dark = false,
}: {
  children: React.ReactNode;
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative border-l-2 px-5 py-4 ${
        dark ? "border-[#C9A94A] bg-white/[0.06] text-white" : "border-[#C9A94A] bg-[#C9A94A]/[0.10] text-[#3A3121]"
      }`}
    >
      <p
        className={`mb-1.5 flex items-center gap-1.5 font-[Cormorant_Garamond] text-xs font-semibold tracking-[0.3em] ${
          dark ? "text-[#E2C66E]" : "text-[#86691C]"
        }`}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3 w-3 shrink-0">
          <path fill="currentColor" d={SPARKLE_PATH} />
        </svg>
        {label}
      </p>
      <p className="text-base leading-[1.75] font-medium tracking-[0.03em]">{children}</p>
    </div>
  );
}

const ICON = {
  pin: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  calendar:
    "M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zM7 12h5v5H7z",
  download: "M5 20h14v-2H5v2zm7-18v10.17l-3.59-3.58L7 10l5 5 5-5-1.41-1.41L13 12.17V2h-2z",
  star: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  // 公式サイト Footer の TripAdvisor アイコンと同じ
  tripadvisor:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.5 10.5c-.83 0-1.5-.67-1.5-1.5S7.67 9.5 8.5 9.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM12 7c-1.59 0-3.07.46-4.32 1.25l-.97-.97A8.93 8.93 0 0112 6c1.88 0 3.62.58 5.06 1.57l-.93.93A6.96 6.96 0 0012 7zm0 12c-2.61 0-4.91-1.41-6.17-3.52l1.17-.73C8.01 16.44 9.9 17.5 12 17.5s3.99-1.06 5-2.75l1.17.73C17.41 17.36 14.9 19 12 19z",
};

const SPARKLES: [string, string, number, string][] = [
  ["9%", "62%", 14, "0s"],
  ["17%", "88%", 9, "1.2s"],
  ["30%", "72%", 7, "2.4s"],
  ["44%", "93%", 11, "0.6s"],
  ["63%", "6%", 8, "1.8s"],
  ["78%", "24%", 13, "0.3s"],
  ["88%", "9%", 7, "2.1s"],
  ["91%", "78%", 10, "1.5s"],
];

export default async function OpeningPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = toLang(locale);
  if (!lang) redirect("/en/opening");
  const t = COPY[lang];
  const site = `${ORIGIN}/${lang}`;

  // 公式サイトのフッターと同じ並び（このページは単独で開かれるため絶対URLにする）
  const footerNav: { label: string; href: string; external?: boolean }[] = [
    { label: t.footerLabels.top, href: site },
    ...navItems.map((item) => ({
      label: item.label,
      href: item.external ? item.href : `${site}${item.href.slice(1)}`,
      external: item.external,
    })),
    { label: t.footerLabels.company, href: `${site}/company` },
    { label: t.footerLabels.tokusho, href: `${site}/tokusyohou` },
    { label: t.footerLabels.privacy, href: `${site}/privacy` },
  ];

  const storeRows = [
    ...t.storeRows,
    {
      label: "TEL",
      value: (
        <a href={TEL_HREF} className="-my-3 inline-block py-3 underline decoration-[#86691C]/40 underline-offset-4">
          {lang === "ja" ? "03-6823-2699" : "+81-3-6823-2699"}
        </a>
      ),
    },
    {
      label: "EMAIL",
      value: (
        <a
          href="mailto:info@t-family.tokyo"
          className="-my-3 inline-block py-3 break-all underline decoration-[#86691C]/40 underline-offset-4"
        >
          info@t-family.tokyo
        </a>
      ),
    },
  ];

  const isJa = lang === "ja";
  const bodyFont = isJa ? "font-[Noto_Sans_JP]" : "font-[DM_Sans]";
  const headingFont = isJa
    ? "font-[Noto_Serif_JP] text-lg tracking-[0.18em]"
    : "font-[Cormorant_Garamond] text-[1.7rem] leading-tight font-medium tracking-[0.02em]";

  return (
    <div className={`bg-[#FAFAF8] text-[#1A1A1A] ${bodyFont} [word-break:auto-phrase]`}>
      {/*
        オープニング演出（読み込み時に1回だけ・CSSのみ）
        0.1s ロゴが浮かび光が走る → 1.15s「T-Vintage」が1文字ずつ浮かぶ → 1.85s produced by T-Family → 2.3s GRAND OPEN
        → 3.1s 幕が上がりヒーローへ（写真がゆっくり寄る／日付が下からせり上がる）
        prefers-reduced-motion では幕を出さず、すべて静止表示
      */}
      <style>{`
        @keyframes op-curtain { 0%, 82% { opacity: 1; visibility: visible; } 100% { opacity: 0; visibility: hidden; } }
        @keyframes op-intro-out { 0%, 78% { opacity: 1; transform: none; filter: blur(0); } 100% { opacity: 0; transform: translateY(-10px); filter: blur(4px); } }
        @keyframes op-logo { from { opacity: 0; transform: scale(0.9); filter: blur(10px); } to { opacity: 1; transform: none; filter: blur(0) drop-shadow(0 0 18px rgba(201,169,74,0.35)); } }
        @keyframes op-shine { from { background-position: 160% 0; } to { background-position: -60% 0; } }
        @keyframes op-letter { from { opacity: 0; transform: translateY(0.35em); filter: blur(8px); } to { opacity: 1; transform: none; filter: blur(0); } }
        @keyframes op-track { from { opacity: 0; letter-spacing: 0.02em; } to { opacity: 1; letter-spacing: 0.16em; } }
        @keyframes op-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes op-rise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        @keyframes op-up { from { transform: translateY(105%); } to { transform: none; } }
        @keyframes op-zoom { from { transform: scale(1.12); opacity: 0.2; } to { transform: scale(1); opacity: 1; } }
        @keyframes op-twinkle { 0%, 100% { opacity: 0.25; transform: scale(0.7) rotate(0deg); } 50% { opacity: 1; transform: scale(1) rotate(45deg); } }

        .op-curtain { animation: op-curtain 3900ms linear both; }
        .op-intro { animation: op-intro-out 3900ms ease-in both; }
        .op-logo { animation: op-logo 1200ms cubic-bezier(0.22, 1, 0.36, 1) 100ms both; }
        .op-shine {
          background: linear-gradient(105deg, transparent 35%, rgba(255,244,214,0.95) 50%, transparent 65%) no-repeat;
          background-size: 250% 100%;
          -webkit-mask: url(/images/opening/t-vintage-logo-gold.png) center / contain no-repeat;
          mask: url(/images/opening/t-vintage-logo-gold.png) center / contain no-repeat;
          animation: op-shine 1100ms ease-in-out 1000ms both;
        }
        .op-letter { display: inline-block; animation: op-letter 900ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .op-track { animation: op-track 1300ms cubic-bezier(0.22, 1, 0.36, 1) 1850ms both; }
        .op-intro-sub { animation: op-fade 900ms ease-out 2300ms both; }

        .op-zoom { animation: op-zoom 3200ms cubic-bezier(0.22, 1, 0.36, 1) 3200ms both; }
        .op-twinkle { animation: op-twinkle 3.6s ease-in-out infinite; transform-origin: center; }
        .op-rise { animation: op-rise 1100ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .op-mask { display: block; overflow: hidden; padding-bottom: 0.04em; }
        .op-up { display: block; animation: op-up 1200ms cubic-bezier(0.22, 1, 0.36, 1) both; }

        @media (prefers-reduced-motion: reduce) {
          .op-curtain { display: none; }
          .op-zoom, .op-rise, .op-up, .op-twinkle { animation: none; }
        }
      `}</style>

      {/* オープニングの幕（装飾のみ。読み上げ対象外） */}
      <div
        aria-hidden="true"
        className="op-curtain pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-[#141414] text-white"
      >
        <div className="op-intro flex flex-col items-center font-[Cormorant_Garamond]">
          <span className="op-logo relative mb-7 block aspect-[640/658] w-[clamp(9rem,42vw,13rem)]">
            <img
              src="/images/opening/t-vintage-logo-gold.png"
              alt=""
              width={640}
              height={658}
              fetchPriority="high"
              className="h-full w-full"
            />
            <span className="op-shine absolute inset-0" />
          </span>
          <span className="text-[clamp(2.75rem,13vw,4.75rem)] leading-none font-medium tracking-[0.04em]">
            {"T-Vintage".split("").map((ch, i) => (
              <span key={i} className="op-letter" style={{ animationDelay: `${1150 + i * 55}ms` }}>
                {ch === "-" ? <Hyphen /> : ch}
              </span>
            ))}
          </span>
          <span className="op-track mt-5 -mr-[0.16em] text-[clamp(1.05rem,4.8vw,1.4rem)] font-medium text-[#C9A94A] italic">
            produced by T<Hyphen low />Family
          </span>
          <span className="op-intro-sub mt-10 text-[13px] tracking-[0.42em] text-white/80 [font-variant-numeric:lining-nums]">
            GRAND OPEN 2026.10.24
          </span>
        </div>
      </div>

      {/* ① ヒーロー */}
      <header className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#141414] text-white">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/opening/hero-wide.webp" />
          <img
            src="/images/opening/hero-portrait.webp"
            alt={t.heroPhotoAlt}
            width={900}
            height={1200}
            fetchPriority="high"
            className="op-zoom absolute inset-0 -z-10 h-full w-full object-cover object-[50%_70%]"
          />
        </picture>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(20,20,20,0.78)_0%,rgba(20,20,20,0.55)_38%,rgba(20,20,20,0.82)_68%,#141414_100%)]"
        />

        <div
          className={`mx-auto flex w-full max-w-[640px] flex-1 flex-col ${GUTTER} pt-[max(1.75rem,env(safe-area-inset-top))] pb-[max(2.5rem,env(safe-area-inset-bottom))]`}
        >
          {/* 言語切り替え */}
          <nav
            aria-label={t.langSwitchLabel}
            className="op-rise -mt-3 -mr-3 mb-1 flex self-end font-[Cormorant_Garamond] text-sm tracking-[0.2em] [animation-delay:3500ms]"
          >
            {(["ja", "en"] as const).map((l) => (
              <a
                key={l}
                href={`/${l}/opening`}
                hrefLang={l}
                lang={l}
                aria-current={l === lang ? "page" : undefined}
                className={`flex min-h-11 min-w-11 items-center justify-center ${
                  l === lang ? "text-[#C9A94A]" : "text-white/70 hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </a>
            ))}
          </nav>

          <h1>
            {/* T-Vintage ／ produced by T-Family */}
            <span
              translate="no"
              className="op-rise block font-[Cormorant_Garamond] text-[clamp(2.75rem,13.5vw,4.5rem)] leading-none font-medium tracking-[0.06em] text-white [animation-delay:3500ms]"
            >
              T<Hyphen />Vintage
            </span>
            <span
              translate="no"
              className="op-rise mt-3 flex items-center gap-3 font-[Cormorant_Garamond] text-[clamp(1.1rem,5vw,1.5rem)] leading-none font-medium tracking-[0.14em] text-[#C9A94A] italic [animation-delay:3600ms]"
            >
              <span aria-hidden="true" className="h-px w-8 bg-[#C9A94A]/80" />
              <span>
                produced by T<Hyphen low />Family
              </span>
            </span>
            <span className="op-rise mt-7 block font-[Cormorant_Garamond] leading-[1.5] [font-variant-numeric:lining-nums] [animation-delay:3750ms]">
              <span className="block text-[13px] font-medium tracking-[0.4em] text-[#C9A94A]">GRAND OPEN</span>
              <span className="block text-lg tracking-[0.18em] text-white">2026.10.24 SAT 11:00</span>
            </span>
          </h1>

          <div className="relative mt-auto pt-20">
            <p
              lang={lang}
              className={`op-rise absolute right-0 bottom-full mb-6 leading-none whitespace-nowrap text-white [writing-mode:vertical-rl] [animation-delay:4500ms] ${
                isJa
                  ? "font-[Noto_Serif_JP] text-[17px] tracking-[0.42em]"
                  : "font-[Cormorant_Garamond] text-[17px] tracking-[0.14em] italic"
              }`}
            >
              {t.catchphrase}
            </p>

            <div>
              <p className="op-rise font-[Cormorant_Garamond] text-base font-medium tracking-[0.5em] text-[#C9A94A] [animation-delay:3800ms]">
                OPENING DAYS
              </p>
              <p className="sr-only">{t.heroDatesSr}</p>
              <div
                aria-hidden="true"
                className="mt-3 font-[Cormorant_Garamond] [font-variant-numeric:lining-nums]"
              >
                {[
                  ["10.24", "SAT", 3900],
                  ["10.25", "SUN", 4080],
                ].map(([date, day, delay]) => (
                  <p key={date} className="flex items-baseline gap-4">
                    <span className="op-mask -ml-[0.04em] text-[clamp(4rem,24vw,7.5rem)] leading-[0.95] font-light text-[#C9A94A]">
                      <span className="op-up" style={{ animationDelay: `${delay}ms` }}>
                        {date}
                      </span>
                    </span>
                    <span
                      className="op-rise text-[clamp(1.25rem,6vw,1.75rem)] tracking-[0.2em] text-white"
                      style={{ animationDelay: `${Number(delay) + 350}ms` }}
                    >
                      {day}
                    </span>
                  </p>
                ))}
              </div>
              <p className="op-rise mt-5 inline-block border border-[#C9A94A]/70 px-3 py-1.5 text-[13px] tracking-[0.08em] text-white [animation-delay:4500ms]">
                {t.heroSpecialDay}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ② ご挨拶 */}
        <section aria-labelledby="greeting" className={`${GUTTER} py-20`}>
          <div className="mx-auto max-w-[31em]">
            <h2
              id="greeting"
              className={`mb-10 tracking-[0.4em] text-[#86691C] ${isJa ? "font-[Noto_Serif_JP] text-xs" : "font-[Cormorant_Garamond] text-sm font-medium"}`}
            >
              {t.greetingLabel}
            </h2>
            <div className="space-y-7 text-[15px] leading-[1.9] tracking-[0.04em]">
              {t.greeting.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <Aside label={t.asideLabel}>{t.greetingAside}</Aside>
            </div>
          </div>
        </section>

        {/* ③ OPENING DAYS */}
        <section aria-labelledby="opening-days" className={`bg-[#141414] text-white ${GUTTER} py-20`}>
          <div className="mx-auto max-w-[31em]">
            <h2
              id="opening-days"
              className="font-[Cormorant_Garamond] text-sm tracking-[0.5em] text-[#C9A94A]"
            >
              OPENING DAYS
            </h2>
            <p className="mt-5 font-[Cormorant_Garamond] text-[2.6rem] leading-tight font-light tracking-[0.04em] whitespace-nowrap [font-variant-numeric:lining-nums] max-[379px]:text-[2.25rem] max-[359px]:text-[1.8rem]">
              10.24 <span className="text-xl tracking-[0.2em]">SAT</span>
              <span className="mx-2.5 text-[#C9A94A]">–</span>
              10.25 <span className="text-xl tracking-[0.2em]">SUN</span>
            </p>
            <p className="mt-4 text-sm leading-[1.9] tracking-[0.06em] text-white">
              <span className="mr-2 inline-block bg-[#C9A94A] px-2 py-0.5 text-xs font-medium tracking-[0.1em] text-[#141414]">
                {t.specialTag}
              </span>
              {t.specialDay}
              <br />
              <span className="text-white/80">{t.hoursBothDays}</span>
            </p>
            <div className="my-10 h-px w-12 bg-[#C9A94A]/60" aria-hidden="true" />

            <div className="space-y-7 text-[15px] leading-[1.9] tracking-[0.04em] text-white/90">
              {t.openingDays.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-10 space-y-3 border-t border-white/15 pt-8">
              {t.openingAsides.map((a, i) => (
                <Aside key={i} dark label={t.asideLabel}>
                  {a}
                </Aside>
              ))}
            </div>
          </div>
        </section>

        {/* ④ お祝いのお花について */}
        <section
          aria-labelledby="flowers"
          className={`relative isolate overflow-hidden bg-[#F5F0E8] ${GUTTER} py-24`}
        >
          {/* お祝いの演出: 光だまり＋胡蝶蘭2輪（写真: Jan Kopřiva / Unsplash を金〜ローズの透過素材に加工）＋きらめき */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_45%_at_85%_10%,rgba(232,196,120,0.38),transparent_70%),radial-gradient(50%_40%_at_5%_95%,rgba(226,160,160,0.28),transparent_70%)]"
          />
          <img
            src="/images/opening/orchid-watermark.webp"
            alt=""
            aria-hidden="true"
            width={900}
            height={1349}
            loading="lazy"
            className="pointer-events-none absolute -top-[14%] -right-[30%] -z-10 h-[80%] w-auto max-w-none rotate-[18deg] opacity-[0.42] select-none sm:-right-[8%]"
          />
          <img
            src="/images/opening/orchid-watermark.webp"
            alt=""
            aria-hidden="true"
            width={900}
            height={1349}
            loading="lazy"
            className="pointer-events-none absolute -bottom-[16%] -left-[34%] -z-10 h-[70%] w-auto max-w-none -scale-x-100 -rotate-[24deg] opacity-[0.34] select-none sm:-left-[10%]"
          />
          {SPARKLES.map(([top, left, size, delay], i) => (
            <svg
              key={i}
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="op-twinkle pointer-events-none absolute -z-10 text-[#C9A246]"
              style={{ top, left, width: size, height: size, animationDelay: delay }}
            >
              <path fill="currentColor" d={SPARKLE_PATH} />
            </svg>
          ))}
          <div className="mx-auto max-w-[31em]">
            <p className="font-[Cormorant_Garamond] text-sm font-medium tracking-[0.5em] text-[#86691C]">
              FLOWERS
            </p>
            <h2
              id="flowers"
              className={`mt-3 mb-10 text-[#1A1A1A] ${headingFont}`}
            >
              {t.flowersHeading}
            </h2>
            <div className="space-y-7 text-[15px] leading-[1.9] tracking-[0.04em]">
              {t.flowers.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <Aside label={t.asideLabel}>{t.flowersAside}</Aside>
            </div>
          </div>
        </section>

        {/* ⑤ 口コミのお願い */}
        <section aria-labelledby="reviews" className={`bg-[#141414] text-white ${GUTTER} py-20`}>
          <div className="mx-auto max-w-[31em]">
            <p className="font-[Cormorant_Garamond] text-sm font-medium tracking-[0.5em] text-[#C9A94A]">
              REVIEWS
            </p>
            <div aria-hidden="true" className="mt-5 flex gap-1.5 text-[#C9A94A]">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  viewBox="0 0 24 24"
                  className="op-twinkle h-6 w-6"
                  style={{ animationDelay: `${i * 0.25}s`, animationDuration: "2.8s" }}
                >
                  <path fill="currentColor" d={ICON.star} />
                </svg>
              ))}
            </div>
            <h2
              id="reviews"
              className={`mt-5 mb-8 ${headingFont}`}
            >
              {t.reviewsHeading}
            </h2>
            <div className="space-y-5 text-[15px] leading-[1.9] tracking-[0.04em] text-white/90 [&_strong]:text-[#E2C66E]">
              {t.reviews.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <Aside dark label={t.asideLabel}>{t.reviewsAside}</Aside>
            </div>
            <div className="mt-10 space-y-3">
              <a
                href={GOOGLE_REVIEW_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN} bg-[#C9A94A] font-medium text-[#141414] hover:bg-[#D8BC66] focus-visible:outline-[#C9A94A]`}
              >
                <Icon d={ICON.star} />
                {t.reviewGoogle}
              </a>
              <a
                href={tripadvisorHref(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN} border border-white/40 text-white hover:border-[#C9A94A] hover:text-[#C9A94A] focus-visible:outline-[#C9A94A]`}
              >
                <Icon d={ICON.tripadvisor} />
                {t.reviewTripadvisor}
              </a>
            </div>
          </div>
        </section>

        {/* ⑥ 店舗のご案内 */}
        <section aria-labelledby="store" className={`${GUTTER} py-20`}>
          <div className="mx-auto max-w-[31em]">
            <h2
              id="store"
              className={`mb-10 text-[#1A1A1A] ${headingFont}`}
            >
              {t.storeHeading}
            </h2>

            <dl className="border-t border-[#E0D9CC] text-[15px] leading-[1.8] tracking-[0.03em]">
              {storeRows.map((row) => (
                <div key={row.label} className="border-b border-[#E0D9CC] py-4">
                  <dt className="mb-1 text-xs tracking-[0.12em] text-[#6B6B6B]">{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5">
              <Aside label={t.asideLabel}>{t.storeAside}</Aside>
            </div>

            <iframe
              src={MAP_EMBED}
              title={t.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-8 aspect-[4/3] w-full border-0 bg-[#EEEAE2]"
            />

            <div className="mt-4 space-y-3">
              <a
                href={MAP_OPEN}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN} bg-[#1A1A1A] text-white hover:bg-[#86691C] focus-visible:outline-[#1A1A1A]`}
              >
                <Icon d={ICON.pin} />
                {t.openMap}
              </a>
              <a href={tripadvisorHref(lang)} target="_blank" rel="noopener noreferrer" className={BTN_OUTLINE}>
                <Icon d={ICON.tripadvisor} />
                {t.viewTripadvisor}
              </a>
            </div>

            <div className="mt-10">
              <p className="text-xs tracking-[0.12em] text-[#6B6B6B]">{t.calendarLabel}</p>
              <p className="mt-1 text-sm leading-[1.8] tracking-[0.03em]">{t.calendarEvent}</p>
              <div className="mt-2">
                <Aside label={t.asideLabel}>{t.calendarAside}</Aside>
              </div>
              <div className="mt-4 space-y-3">
                <a href={gcalHref(lang)} target="_blank" rel="noopener noreferrer" className={BTN_OUTLINE}>
                  <Icon d={ICON.calendar} />
                  {t.addGoogleCalendar}
                </a>
                <a href={t.icsHref} download className={BTN_OUTLINE}>
                  <Icon d={ICON.download} />
                  {t.addIcs}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ⑦ 結び・フッター */}
      <footer
        className={`bg-[#141414] text-white ${GUTTER} pt-20 pb-[max(2.5rem,env(safe-area-inset-bottom))]`}
      >
        <div className="mx-auto max-w-[31em]">
          <p
            className={`leading-[2] tracking-[0.06em] ${isJa ? "font-[Noto_Serif_JP] text-[15px]" : "font-[Cormorant_Garamond] text-lg"}`}
          >
            {t.closing}
          </p>
          <div className="mt-6">
            <Aside dark label={t.asideLabel}>{t.closingAside}</Aside>
          </div>

          <div className="mt-16 font-[Cormorant_Garamond]" translate="no">
            <p className="text-[2rem] leading-none font-medium tracking-[0.06em]">
              T<Hyphen />Vintage
            </p>
            <p className="mt-2 text-base tracking-[0.14em] text-[#C9A94A] italic">
              produced by T<Hyphen low />Family
            </p>
          </div>
          <p className={`mt-6 text-sm tracking-[0.12em] text-white/90 ${isJa ? "font-[Noto_Serif_JP]" : ""}`}>
            {t.company}
          </p>

          {/* SNS・口コミ（公式サイトのフッターと同じリンク） */}
          <ul className="mt-10 grid grid-cols-4 gap-y-2">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-14 items-center justify-center text-white/85 transition-colors hover:text-[#C9A94A]"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>

          {/* サイト内リンク（公式サイトのフッターと同じ項目） */}
          <ul className="mt-8 grid grid-cols-2 gap-x-6 text-[13px] tracking-[0.06em] max-[359px]:grid-cols-1">
            {footerNav.map((item) => (
              <li key={item.label} className="border-b border-white/15">
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex min-h-12 items-center justify-between gap-2 text-white/90 hover:text-[#C9A94A]"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-[#C9A94A]">→</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-12 font-[Cormorant_Garamond] text-sm tracking-[0.18em] text-white/70">
            © 2026 T<Hyphen />Family Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
