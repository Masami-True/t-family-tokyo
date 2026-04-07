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
  - Hero（11枚キービジュアル、2秒切替、object-contain、背景にブランド名流れるテキスト）
  - TrustBar
  - Philosophy（富士山＋桜＋河口湖の写真全面背景、白ガラスカード）
  - CollectionPreview（CHANEL/HERMÈS/LV/DIOR/GUCCI/FENDI）
  - Authenticity（Entrupy AI鑑定、全額返金保証、専門スタッフ検品）
  - GoogleReviews（★5レビュー4件）
  - LiveCommerce（ライブセラー募集中、CTAは/liveseller/へ）
  - B2BSection（パートナーシップ、CTAは外部 t-family.tokyo/buyer01/）
  - CeoGreeting（代表ご挨拶）
  - StoreInfo（店舗情報、Google Maps、1枚店内写真）
  - Footer（SNSリンク、会社概要リンク、特商法リンク）
- `/liveseller/` — ライブセラー応募フォーム（/api/apply でメール送信）
- `/company/` — 会社概要ページ
- `/tokusyohou/` — 特定商取引法に基づく表記
- `/buyer01/` — 外部リンク (https://t-family.tokyo/buyer01/)

## Key Design Decisions
- キービジュアル: HP作成/キービジュアル/ フォルダの全画像を使用、2秒切替
- Philosophy: 富士山＋桜の写真を全面背景（日本感を出す）、黒オーバーレイ40%、テキストは白ガラスパネル
- ヘッダー: ダーク背景グラデーション、Cormorant Garamondフォント、ロゴ90px（buyer01参照）→クリックでTOPへ
- フッター: ロゴなし、余白縮小（py-8）、会社概要＋特商法リンク
- WeChat関連: 全削除済み
- 厳選アイテム: ブランド名大きく表示、商品タイトルなし
- Hermèsリンク: https://t-secondhands.jp/products/hermes-togo-leather-birkin-handbag-red-gold-hardware-he358
- B2B CTA: 「詳細はこちら」→ https://t-family.tokyo/buyer01/ 外部リンク
- 会社概要: B2Bから切り出して /company/ 別ページ化、フッターからリンク

## Email System
- ライブセラー応募フォーム → /api/apply (nodemailer)
- 送信元: tominaga@t-family.tokyo（Google Workspace アプリパスワード）
- 自動返信: 応募者へ確認メール（Reply-To: info@t-family.tokyo）
- 通知: info@t-family.tokyoメーリスに応募内容送信

## External Links
- Shop: https://t-secondhands.jp/
- Instagram: https://www.instagram.com/tfamily.inc/
- Facebook: https://www.facebook.com/profile.php?id=61576088344723
- WhatsApp: https://wa.me/message/YLKX2G23XTTKM1
- YouTube: https://www.youtube.com/@T-Family-727
- X: https://x.com/NextStory7
- nextstory.jp: https://nextstory.jp/
- Buyer page: https://t-family.tokyo/buyer01/

## Image Sources
- キービジュアル: C:\Users\work\OneDrive\Claud\T-Family\HP作成\キービジュアル\ から全画像
- 店内写真: IMG_6521.jpg, IMG_6522.jpg（HEICから変換）
- CEO写真: IMG_6520.jpg（HEICから変換）→ 現在はロゴを使用
- 商品画像: t-secondhands.jpから取得 + Hermès Birkinは個別指定
- Philosophy背景: 富士山＋桜＋河口湖（ユーザー提供画像）
- Entrupy証明書: sample_watermarked.png

## TODO (remaining)
- [ ] カスタムドメイン設定 (t-family.tokyo → Vercel, Value DomainでDNS変更)
- [ ] メール送信テスト（/liveseller/ フォームで確認）
- [ ] Google Analytics (GA4) 設置
- [ ] Google Search Console 設置
- [ ] Entrupy証明書画像を正式なものに差し替え
