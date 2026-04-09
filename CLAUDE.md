# T-Family Corporate Website

## Project Overview
T-Family株式会社（後株）のコーポレートサイト
- **URL**: https://t-family-tokyo.vercel.app/ (本番予定: t-family.tokyo)
- **GitHub**: https://github.com/Masami-True/t-family-tokyo
- **Tech**: Next.js 16 + Tailwind CSS v4 + next-intl v4 (6言語: EN/JA/ZH/KO/ES/FR)
- **自動言語判別**: ブラウザのAccept-Languageヘッダーで自動判別

## Company Info
- 会社名: T-Family株式会社（後株 ← 株式会社T-Familyではない）
- 代表: 富永 朝樹（とみなが あさき）
- 住所: 東京都港区西新橋1丁目18-11 ル・グラシエルBLDG 15号館5F
- TEL: 03-6823-2699
- EMAIL: info@t-family.tokyo（メーリングリスト）
- 管理者メール: tominaga@t-family.tokyo
- 設立: 2020.11.27 / 資本金: 3000万円 / 従業員: 8名
- 古物商許可: 第301132115776号

## Domain & Hosting
- ドメインレジストラ: Value Domain
- メール: Google Workspace (Gmail) — tominaga@t-family.tokyo がSMTP送信元
- ホスティング: Vercel (Hobby plan, GitHub: Masami-True)
- Vercel環境変数: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS 設定済み

## Pages
- `/` — メインLP
  - Hero（13枚キービジュアル、1.5秒切替（1枚目のみ2秒）、object-contain、背景にブランド名流れるテキスト opacity 15%）
  - TrustBar（ブランド名スクロールのみ、Entrupyバッジ・保証バッジ削除済み）
  - Philosophy（富士山＋桜＋河口湖の写真全面背景、黒オーバーレイ40%、白ガラスカード、スマホ用2行ヘッドライン）
  - CollectionPreview（CHANEL/HERMÈS/LV/DIOR/GUCCI/FENDI、ブランド名大きく、タイトルなし）
  - Authenticity（6カード: AI鑑定◉/返金保証✦/専門スタッフ◈ + 実店舗🏬/オンライン🌐/透明性✧ + 大きなEntrupy証明書セクション画像付き + スマホ中央揃えバッジ）
  - GoogleReviews（★5レビュー4件、自動横スクロールカルーセル15秒ループ、「レビューお待ちしております」メッセージ）
  - LiveCommerce（ライブセラー募集中、悩み4項目2列カード、ベネフィット6項目背景カード、公認制度左揃え、クロージングメッセージ、スマホ改行対応、CTAは/liveseller/へ）
  - B2BSection（「業者様・バイヤー様向けご案内」大きなゴールド見出し、4特徴カード、ターゲット顧客リスト、取引条件、CTAは外部 t-family.tokyo/buyer01/）
  - CeoGreeting（代表ご挨拶、ポートレート写真丸型、名前・肩書は右揃え、nextstory.jp全文メッセージ）
  - ContactForm（お問い合わせフォーム: 名前/メール/種別セレクト/メッセージ、/api/contactでメール送信＋自動返信）
  - StoreInfo（店舗情報、Google Maps、店内写真1枚、支払方法目立つ表示 VISA/MASTER/JCB/AMEX/PayPay/Alipay/PayPal/WISE/Apple Pay/Google Pay + 銀行振込/現金/電子マネー）
  - Footer（SNSリンク、会社概要/特商法/プライバシーポリシーリンク、ロゴなし、余白縮小py-8）
  - FloatingContact（WhatsAppのみ）
- `/liveseller/` — ライブセラー応募フォーム（/api/apply でメール送信）
- `/company/` — 会社概要ページ
- `/tokusyohou/` — 特定商取引法に基づく表記
- `/privacy/` — プライバシーポリシー（9項目: 個人情報取得/利用目的/第三者提供/管理/開示訂正削除/Cookie/GA/変更/問い合わせ窓口）
- `/buyer01/` — 外部リンク (https://t-family.tokyo/buyer01/)

## Key Design Decisions
- キービジュアル: HP作成/キービジュアル/ フォルダの全画像を使用（Gemini画像含む13枚）、1.5秒切替（1枚目のみ2秒）
- Philosophy: ユーザー提供の富士山＋桜＋河口湖画像を全面背景、object-cover object-top
- ヘッダー: ダーク背景グラデーション、Cormorant Garamondフォント、ロゴ90px（buyer01サイズ参照）→クリックでTOPへ
- スマホメニュー: 完全不透明ダーク背景(#111111)、大きなセリフフォント、ゴールドボーダー、会社概要＋特商法＋プライバシーポリシーリンク、言語ピルボタン
- スマホ改行対応: Philosophy・Authenticityヘッドライン、Live subcopy・worry_answer を2行分割（block sm:inline）
- フッター: ロゴなし、会社概要＋特商法＋プライバシーポリシーリンク
- フッター翻訳: tokusho (JA:特定商取引法/EN:Legal Notice等)、privacy (JA:プライバシーポリシー/EN:Privacy Policy等)
- WeChat: 全削除済み
- Entrupy: TrustBarバッジ削除、Authenticityカードはアイコン(◉)、証明書セクションは大きな画像＋ゴールドボーダー＋バッジハイライト
- B2B: 「パートナーシップ」削除、「業者様・バイヤー様向けご案内」をゴールド大文字で表示
- CEO挨拶: ロゴ→ポートレート写真(ceo-portrait.png)、名前・肩書は右揃え
- nextstory.jpコンテンツ: Authenticity/Live/B2B/Greetingの全テキストをnextstory.jpから統合

## Email System
- **ライブセラー応募** → /api/apply (nodemailer)
  - 通知: info@t-family.tokyoメーリスに応募内容送信
  - 自動返信: 応募者へ確認メール
- **お問い合わせフォーム** → /api/contact (nodemailer)
  - 通知: info@t-family.tokyoに問い合わせ内容送信（種別: 商品購入/卸売/ライブセラー/その他）
  - 自動返信: 問い合わせ者へ確認メール（問い合わせ内容含む）
- 送信元: tominaga@t-family.tokyo（Google Workspace アプリパスワード）
- Reply-To: info@t-family.tokyo
- Vercel環境変数: SMTP_HOST=smtp.gmail.com, SMTP_PORT=587, SMTP_USER=tominaga@t-family.tokyo, SMTP_PASS=アプリパスワード

## External Links
- Shop: https://t-secondhands.jp/
- Hermès product: https://t-secondhands.jp/products/hermes-togo-leather-birkin-handbag-red-gold-hardware-he358
- Instagram: https://www.instagram.com/tfamily.inc/
- Facebook: https://www.facebook.com/profile.php?id=61576088344723
- WhatsApp: https://wa.me/message/YLKX2G23XTTKM1
- YouTube: https://www.youtube.com/@T-Family-727
- X: https://x.com/NextStory7
- nextstory.jp: https://nextstory.jp/
- Buyer page: https://t-family.tokyo/buyer01/
- Google Reviews: https://share.google/eJlVMlu8ie6p8b51v

## Image Sources
- キービジュアル: C:\Users\work\OneDrive\Claud\T-Family\HP作成\キービジュアル\ から全画像（Gemini画像含む）
- 店内写真: IMG_6522.jpg → store.jpg（1枚のみ表示）
- CEO写真: ceo-portrait.png（Gemini生成、代表ご挨拶で使用）
- 商品画像: t-secondhands.jpから取得 + Hermès Birkinは個別商品ページ画像
- Philosophy背景: 富士山＋桜＋河口湖（ユーザー提供画像 → public/images/japan/fuji-sakura.jpg）
- Entrupy証明書: entrupy.png（Authenticityセクション証明書部分のみ、大きく表示）
- ロゴ: public/images/logo.png（ヘッダー90px）

## TODO (remaining)
- [ ] カスタムドメイン設定 (t-family.tokyo → Vercel, Value DomainでDNS変更)
- [ ] メール送信テスト（/liveseller/ + /contact フォーム両方確認）
- [ ] Google Analytics (GA4) 設置
- [ ] Google Search Console 設置
