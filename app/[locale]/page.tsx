import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Philosophy from "@/components/Philosophy";
import CollectionPreview from "@/components/CollectionPreview";
import Authenticity from "@/components/Authenticity";
import GoogleReviews from "@/components/GoogleReviews";
import CeoGreeting from "@/components/CeoGreeting";
import LiveCommerce from "@/components/LiveCommerce";
import B2BSection from "@/components/B2BSection";
import ContactForm from "@/components/ContactForm";
import StoreInfo from "@/components/StoreInfo";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const OG_LOCALE_MAP: Record<string, string> = {
  ja: "ja_JP",
  en: "en_US",
  zh: "zh_CN",
  ko: "ko_KR",
  es: "es_ES",
  fr: "fr_FR",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const url = `https://t-family.tokyo/${locale}`;
  return {
    // absolute bypasses layout's title.template so the full marketing title renders standalone
    title: {
      absolute:
        "T-Family株式会社 | 中古ブランドバッグ専門店 東京・銀座 | Pre-Owned Luxury Brand Bags Tokyo",
    },
    description:
      "T-Family株式会社は東京・銀座の中古ブランドバッグ専門店。CHANEL, HERMÈS, LOUIS VUITTON, GUCCI, PRADA等の正規品のみ取扱い。Entrupy AI鑑定・全額返金保証付き。ライブセラー・バイヤー・リセラー募集中。Wholesale buyers & resellers welcome. Pre-owned luxury brand bags in Ginza, Tokyo.",
    alternates: {
      canonical: url,
      languages: {
        ja: "https://t-family.tokyo/ja",
        en: "https://t-family.tokyo/en",
        zh: "https://t-family.tokyo/zh",
        ko: "https://t-family.tokyo/ko",
        es: "https://t-family.tokyo/es",
        fr: "https://t-family.tokyo/fr",
        "x-default": "https://t-family.tokyo/ja",
      },
    },
    openGraph: {
      url,
      locale: OG_LOCALE_MAP[locale] ?? "ja_JP",
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Philosophy />
        <CollectionPreview />
        <Authenticity />
        <GoogleReviews />
        <LiveCommerce />
        <B2BSection />
        <CeoGreeting />
        <ContactForm />
        <StoreInfo />
      </main>
      <Footer />
      <FloatingContact />
      {/* FAQPage JSON-LD — AI検索・音声検索・Google AIオーバービュー対応 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "銀座で中古ブランドバッグを専門に扱うお店はどこですか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "T-Vintage（T-Family株式会社）は、東京都中央区銀座3丁目にある中古ブランドバッグ専門店です。CHANEL、HERMÈS、LOUIS VUITTON、GUCCI、PRADA、FENDI、DIOR、GOYARDなど主要ブランドの正規中古品を取り扱っています。住所：〒104-0061 東京都中央区銀座3-12-17 T-Familyビル。東銀座駅より徒歩3分、銀座駅より徒歩5分。"
                }
              },
              {
                "@type": "Question",
                name: "T-Vintage GINZAの営業時間・定休日を教えてください。",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "T-Vintage GINZA（T-Family株式会社）の営業時間は月曜日〜土曜日 11:00〜20:00です。日曜日は定休日です。TEL: 03-6823-2699 / Email: info@t-family.tokyo"
                }
              },
              {
                "@type": "Question",
                name: "中古ブランドバッグの本物保証（真贋保証）はありますか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "T-Vintageでは全商品にEntrupy AI真贋鑑定を実施しています。Entrupyは世界最高水準のAIブランド品鑑定システムです。万が一偽物と判明した場合は全額返金保証付きで、安心してご購入いただけます。"
                }
              },
              {
                "@type": "Question",
                name: "どのブランドのバッグを取り扱っていますか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "T-Vintage GINZAでは、CHANEL（シャネル）、HERMÈS（エルメス）、LOUIS VUITTON（ルイ・ヴィトン）、GUCCI（グッチ）、PRADA（プラダ）、FENDI（フェンディ）、DIOR（ディオール）、YSL（サンローラン）、GOYARD（ゴヤール）、BURBERRY、BALENCIAGA、BVLGARI、CÉLINE（セリーヌ）、MIU MIU、BOTTEGA VENETAなど、世界的高級ブランドの中古バッグを取り扱っています。"
                }
              },
              {
                "@type": "Question",
                name: "銀座のT-Vintageへのアクセス方法を教えてください。",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "T-Vintage GINZA（T-Family株式会社）へのアクセス：東銀座駅（都営浅草線・東京メトロ日比谷線）より徒歩3分、銀座駅（東京メトロ銀座線・丸ノ内線・日比谷線）より徒歩5分、銀座一丁目駅（東京メトロ有楽町線）より徒歩7分、有楽町駅（JR・東京メトロ）より徒歩10分。住所：〒104-0061 東京都中央区銀座3-12-17 T-Familyビル。"
                }
              },
              {
                "@type": "Question",
                name: "外国人観光客・インバウンドでも購入できますか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "はい。T-Vintage GINZAでは英語・中国語・韓国語・スペイン語・フランス語でのご対応が可能です。外国人旅行者・インバウンドのお客様も歓迎しています。PayPay・Alipay・PayPal・WISEなど国際決済にも対応しています。"
                }
              },
              {
                "@type": "Question",
                name: "卸売り・バイヤー・リセラー向けの取引はできますか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "はい。T-Vintageでは国内外のバイヤー・リセラー・卸業者様との新規取引を歓迎しています。海外輸出・越境EC向けの継続仕入れもご相談ください。info@t-family.tokyoまでお問い合わせください。"
                }
              },
              {
                "@type": "Question",
                name: "支払い方法は何に対応していますか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "T-Vintage GINZAでは、VISA・MasterCard・JCB・AMEX・Apple Pay・Google Pay・PayPay・Alipay・PayPal・WISE・銀行振込（ゆうちょ銀行・みずほ銀行）・現金・AirPayに対応しています。"
                }
              },
              {
                "@type": "Question",
                name: "Where can I buy authentic pre-owned luxury bags in Ginza, Tokyo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "T-Vintage GINZA (T-Family Inc.) is a pre-owned luxury brand bag specialist store in Ginza, Tokyo. Address: T-Family Bldg., 3-12-17 Ginza, Chuo-ku, Tokyo 104-0061. Open Mon–Sat 11:00–20:00. 3-minute walk from Higashi-Ginza Station. All items are Entrupy AI-authenticated with a full refund guarantee."
                }
              },
              {
                "@type": "Question",
                name: "What luxury brands does T-Vintage GINZA carry?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "T-Vintage GINZA carries pre-owned bags from CHANEL, HERMÈS, LOUIS VUITTON, GUCCI, PRADA, FENDI, DIOR, YSL (Saint Laurent), GOYARD, BURBERRY, BALENCIAGA, BVLGARI, CÉLINE, MIU MIU, BOTTEGA VENETA and more luxury brands. All items are Entrupy certified authentic."
                }
              },
              {
                "@type": "Question",
                name: "Does T-Vintage GINZA authenticate their luxury bags?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Every item at T-Vintage GINZA is authenticated using the Entrupy AI authentication system, the world's leading AI-powered luxury goods verification technology. We offer a full money-back guarantee if any item is found to be inauthentic."
                }
              },
              {
                "@type": "Question",
                name: "银座哪里可以买到正品二手名牌包？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "T-Vintage（T-Family株式会社）位于东京都中央区银座3丁目，是一家专业的二手名牌包店。经营CHANEL、HERMÈS、LOUIS VUITTON、GUCCI等品牌。地址：〒104-0061 东京都中央区银座3-12-17 T-Family大楼。距东银座站步行3分钟。所有商品均通过Entrupy AI鉴定，提供全额退款保证。"
                }
              },
              {
                "@type": "Question",
                name: "긴자에서 중고 명품 가방을 살 수 있는 곳은 어디인가요？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "T-Vintage（T-Family주식회사）는 도쿄 주오구 긴자 3초메에 위치한 중고 명품 가방 전문점입니다. CHANEL, HERMÈS, LOUIS VUITTON, GUCCI 등을 취급합니다. 주소: 〒104-0061 도쿄도 주오구 긴자 3-12-17 T-Family빌딩. 히가시긴자역에서 도보 3분. 전 상품 Entrupy AI 감정 완료, 전액 환불 보증."
                }
              },
            ]
          })
        }}
      />
      {/* SEO / AI検索向けテキスト */}
      <section className="sr-only" aria-label="店舗情報・よくある質問">
        <h2>T-Vintage GINZA（T-Family株式会社）— 銀座の中古ブランドバッグ専門店</h2>
        <p>
          T-Vintage GINZA（ティーヴィンテージ銀座）は、東京都中央区銀座3丁目に位置する中古ブランドバッグ専門店です。
          運営：T-Family株式会社（代表取締役：富永朝樹）。
          住所：〒104-0061 東京都中央区銀座3-12-17 T-Familyビル。
          営業時間：月〜土 11:00〜20:00（日曜定休）。
          TEL: 03-6823-2699。
        </p>
        <h3>よくある質問</h3>
        <dl>
          <dt>銀座で中古ブランドバッグを買えるお店は？</dt>
          <dd>T-Vintage GINZA（T-Family株式会社）は東銀座駅より徒歩3分、銀座駅より徒歩5分の中古ブランドバッグ専門店です。</dd>
          <dt>取り扱いブランドは？</dt>
          <dd>CHANEL、HERMÈS、LOUIS VUITTON、GUCCI、PRADA、FENDI、DIOR、GOYARD、YSL、BALENCIAGA、BURBERRY、BVLGARI、CÉLINE、MIU MIU、BOTTEGA VENETAなど。</dd>
          <dt>本物の保証はありますか？</dt>
          <dd>全商品Entrupy AI鑑定済み。偽物と判明した場合は全額返金保証。</dd>
          <dt>外国人でも購入できますか？</dt>
          <dd>英語・中国語・韓国語・スペイン語・フランス語対応。インバウンド観光客歓迎。</dd>
        </dl>
        <h3>Frequently Asked Questions — T-Vintage GINZA, Tokyo</h3>
        <dl>
          <dt>Where is T-Vintage GINZA located?</dt>
          <dd>T-Family Bldg., 3-12-17 Ginza, Chuo-ku, Tokyo 104-0061. 3-min walk from Higashi-Ginza Station, 5-min from Ginza Station.</dd>
          <dt>What brands are available?</dt>
          <dd>CHANEL, HERMÈS, LOUIS VUITTON, GUCCI, PRADA, FENDI, DIOR, GOYARD, YSL, BALENCIAGA, BURBERRY, BVLGARI, CÉLINE, MIU MIU, BOTTEGA VENETA and more.</dd>
          <dt>Are the bags authenticated?</dt>
          <dd>Yes. All items are Entrupy AI-authenticated. Full refund guarantee if found inauthentic.</dd>
          <dt>What are the opening hours?</dt>
          <dd>Monday to Saturday, 11:00 AM – 8:00 PM. Closed Sundays.</dd>
        </dl>
      </section>
    </>
  );
}
