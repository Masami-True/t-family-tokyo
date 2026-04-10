# T-Family Corporate Website

## Project Overview
T-Family株式会社（後株）のコーポレートサイト
- **本番URL**: https://t-family.tokyo ✅ LIVE
- **Vercel URL**: https://t-family-tokyo.vercel.app/
- **GitHub**: https://github.com/Masami-True/t-family-tokyo
- **Tech**: Next.js 16 + Tailwind CSS v4 + next-intl v4 (6言語: EN/JA/ZH/KO/ES/FR)
- **自動言語判別**: ブラウザのAccept-Languageヘッダーで自動判別
- **Google Analytics**: G-L8TLLNDFH9 ✅
- **Google Search Console**: 所有権確認済み + sitemap送信済み ✅
- **Elfsight**: Google Reviews Widget (ID: 3740619c-f4fa-4380-861d-a953d8f0438c) ✅

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
- ドメインレジストラ: Value Domain（ユーザー名: atoffice）
- DNS: A @ 216.198.79.1 / CNAME www cname.vercel-dns.com. / MX+SPF+DKIM Google Workspace
- メール: Google Workspace (Gmail) — tominaga@t-family.tokyo がSMTP送信元
- ホスティング: Vercel (Hobby plan, GitHub: Masami-True)
- Vercel環境変数: SMTP_HOST=smtp.gmail.com, SMTP_PORT=587, SMTP_USER=tominaga@t-family.tokyo, SMTP_PASS=アプリパスワード

## SEO ✅
- **メタタグ**: title/description 日英キーワード最適化
- **45+キーワード**: T-Family, 中古ブランド, 中古ブランドショップ, 中古ブランド銀座/新橋, ブランドバッグ, ライバー, BRAND BAG, Pre-owned luxury brand, Secondhand shops, Live Seller, CHANEL/HERMÈS/LV/GUCCI/PRADA/FENDI/DIOR/YSL/GOYARD/BURBERRY/BALENCIAGA/BVLGARI/CÉLINE/MIU MIU/BOTTEGA VENETA + BAG, inbound shopping Tokyo
- **JSON-LD構造化データ**: LocalBusiness + 15ブランドProduct + 評価4.7★ + 営業時間 + GPS
- **OGP + Twitterカード**: SNS共有最適化
- **sitemap.xml**: 全6言語×5ページ = 30URL → Search Console送信済み
- **robots.txt**: クローラー許可、/api/除外
- **hreflang**: 6言語の正規URL + canonical
- **SEOテキスト**: ページ最下部にキーワード豊富な日英テキスト
- **nextstory.jpリンク**: フッターに相互リンク

## Pages
- `/` — メインLP
  - Hero（13枚キービジュアル、1.5秒切替（1枚目のみ2秒）、object-contain、背景ブランド名 opacity 15%、スマホ2x2ボタングリッド、安心訴求バッジ3つ、subcopy改行対応）
  - TrustBar（ブランド名スクロールのみ）
  - Philosophy（富士山＋桜＋河口湖の写真全面背景、白ガラスカード、スマホ2行ヘッドライン）
  - CollectionPreview（6ブランド、ブランド名大きく表示）
  - Authenticity（6カード左揃え + T-Family紹介文 + 大きなEntrupy証明書セクション）
  - GoogleReviews（Elfsightウィジェット、自動スクロール2秒、日本語、Googleカラータイトル）
  - LiveCommerce（ライブセラー募集中、悩みセクション、公認制度、クロージング改行対応）
  - B2BSection（業者様・バイヤー様向けご案内、ターゲット顧客リスト）
  - CeoGreeting（PC:写真左グラデーション+テキスト右、スマホ:タイトル→写真+名前横並び→メッセージ、ベージュ背景）
  - ContactForm（お問い合わせフォーム、/api/contact）
  - StoreInfo（店舗情報、Google Maps、支払方法目立つ表示）
  - Footer（SNS、会社概要/特商法/プライバシー/nextstory.jpリンク）
  - FloatingContact（WhatsAppのみ）
  - SEOテキストセクション（日英キーワード）
- `/liveseller/` — ライブセラー応募フォーム（/api/apply）
- `/company/` — 会社概要
- `/tokusyohou/` — 特定商取引法に基づく表記
- `/privacy/` — プライバシーポリシー（9項目）
- `/buyer01/` — Netlifyリダイレクト

## Security ✅
- XSS: X-XSS-Protection + HTMLサニタイズ
- クリックジャッキング: X-Frame-Options: DENY
- MIME Sniffing: X-Content-Type-Options: nosniff
- HTTPS: HSTS 2年
- CSP: スクリプト/スタイル/画像/フレーム制限（Elfsight許可済み）
- レート制限: API 5リクエスト/60秒/IP
- 入力バリデーション + ソースマップ非公開

## Email System ✅
- **ライブセラー応募** → /api/apply (nodemailer) → info@t-family.tokyo通知 + 自動返信
- **お問い合わせ** → /api/contact (nodemailer) → info@t-family.tokyo通知 + 自動返信
- 送信元: tominaga@t-family.tokyo / Reply-To: info@t-family.tokyo

## Key Design Decisions
- キービジュアル: HP作成/キービジュアル/ フォルダ全画像（13枚）、1.5秒（1枚目2秒）
- Philosophy: 富士山＋桜＋河口湖画像全面背景
- ヘッダー: ダーク背景、Cormorant Garamond、ロゴ120px/スマホ60px
- スマホメニュー: 不透明ダーク(#111111)、会社概要+特商法+プライバシーリンク
- スマホ全般: フォント縮小、改行対応（subcopy/headline/closing等）、2x2ボタングリッド
- Google口コミ: Elfsight（自動スクロール2秒、日本語、Widget Title OFF→サイト側多言語タイトル）
- CEO挨拶: PC=写真左グラデーション+テキスト右、スマホ=タイトル→写真+名前→メッセージ
- クロージング: 「T-Familyは、配信者一人ひとりのパートナーです。\n共に売り、共に成長し、世界へ挑戦するチームです。」
- nextstory.jpコンテンツ: 全テキスト統合済み

## External Links
- Shop: https://t-secondhands.jp/
- Hermès product: https://t-secondhands.jp/products/hermes-togo-leather-birkin-handbag-red-gold-hardware-he358
- Instagram: https://www.instagram.com/tfamily.inc/
- Facebook: https://www.facebook.com/profile.php?id=61576088344723
- WhatsApp: https://wa.me/message/YLKX2G23XTTKM1
- YouTube: https://www.youtube.com/@T-Family-727
- X: https://x.com/NextStory7
- nextstory.jp: https://nextstory.jp/
- Buyer page: https://t-family.tokyo/buyer01/ → Netlifyリダイレクト
- Google Reviews: https://share.google/eJlVMlu8ie6p8b51v
- Google Review投稿: https://g.page/r/CT5WXUVxa3XmEAI/review

## Image Sources
- キービジュアル: HP作成/キービジュアル/ 全画像
- CEO写真: ceo-portrait.png（Gemini生成）+ ceo-portrait.jpg（実写）
- Philosophy背景: fuji-sakura.jpg（ユーザー提供）
- Entrupy証明書: entrupy.png
- ロゴ: logo.png（ヘッダー120px/スマホ60px）
- ファビコン: T-Family_LOGO (2).jpg から生成

## COMPLETED ✅
- [x] サイト構築（Next.js 16 + 6言語）
- [x] カスタムドメイン（t-family.tokyo → Vercel + Value Domain DNS）
- [x] セキュリティ強化（CSP, HSTS, XSS, Rate Limiting）
- [x] Google Analytics (GA4: G-L8TLLNDFH9)
- [x] Google Search Console + sitemap送信
- [x] メール送信（自動返信 + 通知、テスト済み）
- [x] Elfsight Google Reviews（実口コミ、自動スクロール2秒、日本語）
- [x] SEO最適化（45+キーワード、JSON-LD、OGP、hreflang）
- [x] nextstory.jpコンテンツ統合
- [x] GPTフィードバック対応（行動導線強化、口コミ改善、信頼訴求）
- [x] スマホデザイン最適化
