import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "特定商取引法に基づく表記",
    description:
      "T-Family株式会社の特定商取引法に基づく表記。販売業者情報、返品・交換、支払方法等。",
    alternates: {
      canonical: `https://t-family.tokyo/${locale}/tokusyohou`,
      languages: {
        ja: "https://t-family.tokyo/ja/tokusyohou",
        en: "https://t-family.tokyo/en/tokusyohou",
        zh: "https://t-family.tokyo/zh/tokusyohou",
        ko: "https://t-family.tokyo/ko/tokusyohou",
        es: "https://t-family.tokyo/es/tokusyohou",
        fr: "https://t-family.tokyo/fr/tokusyohou",
        "x-default": "https://t-family.tokyo/ja/tokusyohou",
      },
    },
    openGraph: {
      url: `https://t-family.tokyo/${locale}/tokusyohou`,
      locale:
        ({ ja: "ja_JP", en: "en_US", zh: "zh_CN", ko: "ko_KR", es: "es_ES", fr: "fr_FR" } as Record<string, string>)[locale] ?? "ja_JP",
    },
  };
}

export default function TokusyohouPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-6 max-w-3xl mx-auto min-h-screen">
        <h1 className="font-[Noto_Serif_JP] text-2xl mb-8 text-center">
          特定商取引法に基づく表記
        </h1>
        <div className="space-y-6 text-sm text-subtext leading-relaxed">
          <div>
            <h2 className="font-medium text-text mb-1">販売業者</h2>
            <p>T-Family株式会社</p>
          </div>
          <div>
            <h2 className="font-medium text-text mb-1">代表責任者</h2>
            <p>富永 朝樹</p>
          </div>
          <div>
            <h2 className="font-medium text-text mb-1">所在地</h2>
            <p>
              東京都港区西新橋1丁目18-11
              <br />
              ル・グラシエルBLDG 15号館5F
            </p>
          </div>
          <div>
            <h2 className="font-medium text-text mb-1">電話番号</h2>
            <p>03-6823-2699</p>
          </div>
          <div>
            <h2 className="font-medium text-text mb-1">メールアドレス</h2>
            <p>info@t-family.tokyo</p>
          </div>
          <div>
            <h2 className="font-medium text-text mb-1">営業時間</h2>
            <p>9:00〜21:00（土日休み）</p>
          </div>
          <div>
            <h2 className="font-medium text-text mb-1">古物商許可</h2>
            <p>東京都公安委員会 第301132115776号</p>
          </div>
          <div>
            <h2 className="font-medium text-text mb-1">販売価格</h2>
            <p>各商品ページに記載</p>
          </div>
          <div>
            <h2 className="font-medium text-text mb-1">送料</h2>
            <p>商品ページに記載（国内・海外配送対応）</p>
          </div>
          <div>
            <h2 className="font-medium text-text mb-1">返品・交換</h2>
            <p>
              商品到着後7日以内にご連絡ください。
              <br />
              真贋保証：万が一偽物と確認された場合は全額返金いたします。
            </p>
          </div>
          <div>
            <h2 className="font-medium text-text mb-1">支払方法</h2>
            <p>
              クレジットカード（VISA / MASTER / JCB / AMEX）
              <br />
              Apple Pay / Google Pay / Shop Pay
              <br />
              PayPay / Alipay / PayPal / WISE
              <br />
              銀行振込（ゆうちょ銀行・みずほ銀行）
              <br />
              現金 / AirPay
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
