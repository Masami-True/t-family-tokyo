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
  - Hero（11枚キービジュアル、1.5秒切替、object-contain、背景にブランド名流れるテキスト）
  - TrustBar（ブランド名スクロール、Entrupyバッジ削除済み）
  - Philosophy（富士山＋桜＋河口湖の写真全面背景、黒オーバーレイ40%、白ガラスカード）
  - CollectionPreview（CHANEL/HERMÈS/LV/DIOR/GUCCI/FENDI、ブランド名大きく、タイトルなし）
  - Authenticity（3カード: AI鑑定◉/返金保証✦/専門スタッフ◈ + Entrupy証明書セクション画像付き）
  - GoogleReviews（★5レビュー4件）
  - LiveCommerce（ライブセラー募集中、CTAは/liveseller/へ）
  - B2BSection（パートナーシップ、CTAは外部 t-family.tokyo/buyer01/、会社概要は別ページに分離済み）
  - CeoGreeting（代表ご挨拶、表示順: T-Family株式会社 → 代表取締役 → 富永 朝樹）
  - StoreInfo（店舗情報、Google Maps、店内写真1枚）
  - Footer（SNSリンク、会社概要リンク、特商法リンク、ロゴなし、余白縮小py-8）
  - FloatingContact（WhatsAppのみ、WeChat削除済み）
- `/liveseller/` — ライブセラー応募フォーム（/api/apply でメール送信）
- `/company/` — 会社概要ページ（B2Bから分離、フッターからリンク）
- `/tokusyohou/` — 特定商取引法に基づく表記
- `/buyer01/` — 外部リンク (https://t-family.tokyo/buyer01/)

## Key Design Decisions
- キービジュアル: HP作成/キービジュアル/ フォルダの全11画像を使用、1.5秒切替
- Philosophy: ユーザー提供の富士山＋桜＋河口湖画像を全面背景、object-cover object-top
- ヘッダー: ダーク背景グラデーション、Cormorant Garamondフォント、ロゴ90px（buyer01サイズ参照）→クリックでTOPへスムーススクロール
- スマホメニュー: 完全不透明ダーク背景(#111111)、大きなセリフフォント、ゴールドボーダー区切り、会社概要＋特商法リンク、言語ピルボタン、メールアドレス表示
- フッター: ロゴなし、余白縮小、会社概要＋特商法リンク（全言語翻訳済み）
- フッター特商法テキスト: JA:特定商取引法に基づく表記 / EN:Legal Notice / ZH:特定商交易法标示 / KO:특정상거래법 표기 / ES:Aviso Legal / FR:Mentions Légales
- WeChat関連: 全削除済み（FloatingContact、StoreInfo、モーダル）
- Entrupy: TrustBarのバッジ削除、Authenticityカード上部はアイコン(◉)に変更、証明書セクションのみ画像残存
- 厳選アイテム: ブランド名大きく表示、商品タイトルなし
- Hermèsリンク: https://t-secondhands.jp/products/hermes-togo-leather-birkin-handbag-red-gold-hardware-he358
- B2B CTA: 「詳細はこちら」→ https://t-family.tokyo/buyer01/ 外部リンク
- 会社概要: B2Bから切り出して /company/ 別ページ化、フッター＋スマホメニューからリンク
- Facebookリンク: https://www.facebook.com/profile.php?id=61576088344723

## Email System
- ライブセラー応募フォーム → /api/apply (nodemailer)
- 送信元: tominaga@t-family.tokyo（Google Workspace アプリパスワード）
- 自動返信: 応募者へ確認メール（Reply-To: info@t-family.tokyo）
- 通知: info@t-family.tokyoメーリスに応募内容送信
- Vercel環境変数: SMTP_HOST=smtp.gmail.com, SMTP_PORT=587, SMTP_USER=tominaga@t-family.tokyo, SMTP_PASS=アプリパスワード

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
- キービジュアル: C:\Users\work\OneDrive\Claud\T-Family\HP作成\キービジュアル\ から全11画像
- 店内写真: IMG_6522.jpg → store.jpg（1枚のみ表示）
- 商品画像: t-secondhands.jpから取得 + Hermès Birkinは個別商品ページ画像
- Philosophy背景: 富士山＋桜＋河口湖（ユーザー提供画像 → public/images/japan/fuji-sakura.jpg）
- Entrupy証明書: entrupy.png（Authenticityセクション証明書部分のみ使用）
- ロゴ: public/images/logo.png

## TODO (remaining)
- [ ] カスタムドメイン設定 (t-family.tokyo → Vercel, Value DomainでDNS変更)
- [ ] メール送信テスト（/liveseller/ フォームで確認）
- [ ] Google Analytics (GA4) 設置
- [ ] Google Search Console 設置
