import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-6 max-w-3xl mx-auto min-h-screen">
        <h1 className="font-[Noto_Serif_JP] text-2xl mb-8 text-center">
          プライバシーポリシー
        </h1>
        <div className="space-y-8 text-sm text-subtext leading-relaxed">
          <div>
            <h2 className="font-medium text-text mb-2 text-base">1. 個人情報の取得について</h2>
            <p>
              T-Family株式会社（以下「当社」）は、お客様の個人情報を適正かつ公正な手段により取得いたします。
              お問い合わせフォーム、応募フォーム、ご購入手続き等を通じて、お名前、メールアドレス、電話番号、住所等の情報をご提供いただく場合がございます。
            </p>
          </div>

          <div>
            <h2 className="font-medium text-text mb-2 text-base">2. 個人情報の利用目的</h2>
            <p>当社は、取得した個人情報を以下の目的で利用いたします。</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>商品の販売・発送およびアフターサービスの提供</li>
              <li>お問い合わせへの対応</li>
              <li>ライブセラープログラムへの応募受付・ご連絡</li>
              <li>卸売・業者取引に関するご連絡</li>
              <li>サービスの改善および新サービスの開発</li>
              <li>キャンペーン・イベント等のご案内（同意をいただいた場合のみ）</li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium text-text mb-2 text-base">3. 個人情報の第三者提供</h2>
            <p>
              当社は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません。
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>お客様の同意がある場合</li>
              <li>法令に基づき開示が求められた場合</li>
              <li>商品の配送業務等で業務委託先に必要な範囲で提供する場合（DHL等）</li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium text-text mb-2 text-base">4. 個人情報の管理</h2>
            <p>
              当社は、個人情報の漏洩、滅失、毀損を防止するため、適切な安全管理措置を講じます。
              従業員に対して個人情報保護に関する教育・啓発を行い、個人情報の適切な取り扱いを徹底いたします。
            </p>
          </div>

          <div>
            <h2 className="font-medium text-text mb-2 text-base">5. 個人情報の開示・訂正・削除</h2>
            <p>
              お客様ご本人から個人情報の開示・訂正・削除等のご請求があった場合、ご本人確認の上、合理的な期間内に対応いたします。
              下記お問い合わせ窓口までご連絡ください。
            </p>
          </div>

          <div>
            <h2 className="font-medium text-text mb-2 text-base">6. Cookieの使用について</h2>
            <p>
              当社ウェブサイトでは、利便性の向上やアクセス解析のためにCookieを使用する場合がございます。
              Cookieの使用を希望されない場合は、ブラウザの設定により無効にすることが可能です。
              ただし、一部サービスが正常にご利用いただけない場合がございます。
            </p>
          </div>

          <div>
            <h2 className="font-medium text-text mb-2 text-base">7. Google Analyticsの利用について</h2>
            <p>
              当社ウェブサイトでは、Googleによるアクセス解析ツール「Google Analytics」を利用しています。
              Google Analyticsはトラフィックデータの収集のためにCookieを使用します。
              このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
              詳細はGoogleのプライバシーポリシーをご確認ください。
            </p>
          </div>

          <div>
            <h2 className="font-medium text-text mb-2 text-base">8. プライバシーポリシーの変更</h2>
            <p>
              当社は、必要に応じて本プライバシーポリシーを変更する場合がございます。
              変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>
          </div>

          <div>
            <h2 className="font-medium text-text mb-2 text-base">9. お問い合わせ窓口</h2>
            <p>
              T-Family株式会社<br />
              東京都港区西新橋1丁目18-11 ル・グラシエルBLDG 15号館5F<br />
              TEL: 03-6823-2699<br />
              EMAIL: info@t-family.tokyo
            </p>
          </div>

          <div className="text-right text-xs text-subtext pt-4 border-t border-border">
            <p>制定日：2025年1月1日</p>
            <p>T-Family株式会社</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
