import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
            <p>11:00〜21:00（年中無休）</p>
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
