# T-Family Corporate Website

## Project Overview
T-Family株式会社（後株）のコーポレートサイト
- **本番URL**: https://t-family.tokyo ✅ LIVE
- **Vercel URL**: https://t-family-tokyo.vercel.app/
- **GitHub**: https://github.com/Masami-True/t-family-tokyo
- **Tech**: Next.js 16 + Tailwind CSS v4 + next-intl v4 (6言語: EN/JA/ZH/KO/ES/FR)
- **自動言語判別**: ブラウザのAccept-Languageヘッダーで自動判別（位置情報ではなくブラウザ言語設定ベース）
- **Google翻訳防止**: `<meta name="google" content="notranslate">` + `class="notranslate"` 設定済み
- **Google Analytics**: G-L8TLLNDFH9 ✅
- **Google Search Console**: 所有権確認済み + sitemap送信済み ✅
- **Google Reviews**: サイト内蔵カルーセル（Elfsightから移行済み、12件の実口コミ）✅

## Company Info
- 会社名: T-Family株式会社（後株 ← 株式会社T-Familyではない）
- 代表: 富永 朝樹（とみなが あさき）
- 住所: 東京都港区西新橋1丁目18-11 ル・グラシエルBLDG 15号館5F
- TEL: 03-6822-8487
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
- **メタタグ**: title「T-Family | 中古ブランドバッグ専門店 東京・新橋 | Pre-Owned Luxury Brand Bags Tokyo」
- **45+キーワード**: T-Family, 中古ブランド, 中古ブランドショップ, ブランドバッグ, 中古ブランド銀座/新橋, ライバー, BRAND BAG, Pre-owned luxury brand, Secondhand shops, Live Seller, 全ブランド名+BAG, inbound shopping Tokyo
- **JSON-LD構造化データ**: LocalBusiness + 15ブランドProduct + 営業時間 + GPS
- **OGP + Twitterカード**: SNS共有最適化
- **sitemap.xml**: 全6言語×5ページ = 30URL → Search Console送信済み
- **robots.txt**: クローラー許可、/api/除外
- **hreflang**: 6言語の正規URL + canonical
- **SEOテキスト**: sr-onlyで非表示（クローラーのみ読める）
- **nextstory.jpリンク**: フッターに相互リンク

## Pages
- `/` — メインLP
  - Hero（13枚KV、1.5秒/1枚目2秒、スマホ2x2ボタン、安心訴求バッジ3つ横並び、subcopy白色改行）
  - TrustBar（ブランド名スクロール）
  - Philosophy（富士山＋桜＋河口湖写真全面背景、白ガラスカード）
  - CollectionPreview（6ブランド）
  - Authenticity（6カード左揃え + T-Family紹介文 + Entrupy証明書セクション）
  - GoogleReviews（サイト内蔵12件実口コミカルーセル、連続スムーススクロール、Googleカラータイトル、レビュー投稿ボタン）
  - LiveCommerce（ライブセラー募集中、3ステップ改行対応、全テキスト白）
  - B2BSection（業者様・バイヤー様向けご案内、全テキスト白）
  - CeoGreeting（PC:写真左グラデ+テキスト右、スマホ:タイトル→写真+名前→メッセージ、ベージュ背景）
  - ContactForm（お問い合わせフォーム、ハニーポットスパム対策付き）
  - StoreInfo（店舗情報、Google Maps、支払方法）
  - Footer（SNS、会社概要/特商法/プライバシー/nextstory.jp、テキスト明るく）
  - FloatingContact（WhatsAppのみ）
  - SEOテキスト（sr-only非表示）
- `/liveseller/` — ライブセラー応募フォーム（ハニーポットスパム対策付き）
- `/company/` — 会社概要（TEL 03-6822-8487 + EMAIL info@t-family.tokyo）
- `/tokusyohou/` — 特定商取引法に基づく表記
- `/privacy/` — プライバシーポリシー（9項目）
- `/buyer01/` — Netlifyリダイレクト（proxyのmatcherから除外済み）

## Security ✅
- XSS: X-XSS-Protection + HTMLサニタイズ
- クリックジャッキング: X-Frame-Options: DENY
- MIME Sniffing: X-Content-Type-Options: nosniff
- HTTPS: HSTS 2年
- CSP: スクリプト/スタイル/画像/フレーム制限
- レート制限: API 5リクエスト/60秒/IP
- 入力バリデーション + ソースマップ非公開
- **スパム対策**: ハニーポットフィールド（フロント+API両方チェック）

## Email System ✅ テスト済み
- **ライブセラー応募** → /api/apply → info@t-family.tokyo通知 + 自動返信
- **お問い合わせ** → /api/contact → info@t-family.tokyo通知 + 自動返信
- 送信元: tominaga@t-family.tokyo / Reply-To: info@t-family.tokyo

## Key Design Decisions
- **ヘッダー**: ダーク背景、スクロール時完全不透明(#141414)、T-Family_LOGO_gold（透過処理済み、mix-blend-lighten）+ 「T-Family Inc.」ゴールドテキスト（translate="no"）、gap-0.5で密着
- **スマホメニュー**: 不透明ダーク(#111111)
- **キービジュアル**: 13枚、1.5秒（1枚目2秒）、subcopy白色、バッジ3つ横並び
- **Google口コミ**: Elfsightから移行→サイト内蔵カルーセル（12件実口コミ、連続スムーススクロール、正方形カード、評価数非表示、レビュー投稿ボタンあり）
- **CEO挨拶**: PC=写真左グラデーション+テキスト右、スマホ=タイトル→写真+名前→メッセージ
- **全テキスト白**: ダークセクション（LiveCommerce・B2B）のグレー→白
- **フッター**: テキスト明るく（/80）、nextstory.jpリンク
- **Google翻訳防止**: notranslateメタ+クラス+ブランド名translate="no"
- **スパム対策**: 全フォームにハニーポットフィールド

## External Links
- Shop: https://t-secondhands.jp/
- Hermès: https://t-secondhands.jp/products/hermes-togo-leather-birkin-handbag-red-gold-hardware-he358
- Instagram: https://www.instagram.com/tfamily.inc/
- Facebook: https://www.facebook.com/profile.php?id=61576088344723
- WhatsApp: https://wa.me/message/YLKX2G23XTTKM1
- YouTube: https://www.youtube.com/@T-Family-727
- X: https://x.com/NextStory7
- nextstory.jp: https://nextstory.jp/
- Buyer: https://t-family.tokyo/buyer01/ → Netlifyリダイレクト
- Google Review投稿: https://g.page/r/CT5WXUVxa3XmEAI/review

## Image Sources
- キービジュアル: HP作成/キービジュアル/ 全画像
- CEO写真: ceo-portrait.png（Gemini）+ ceo-portrait.jpg（実写）
- Philosophy背景: fuji-sakura.jpg
- Entrupy証明書: entrupy.png
- ロゴ: logo-gold.png（T-Family_LOGO_gold、白背景透過処理済み、mix-blend-lighten）
- ファビコン: T-Family_LOGO (2).jpg から生成

## COMPLETED ✅
- [x] サイト構築（Next.js 16 + 6言語）
- [x] カスタムドメイン（t-family.tokyo → Vercel + Value Domain DNS）
- [x] セキュリティ強化（CSP, HSTS, XSS, Rate Limiting, ハニーポット）
- [x] Google Analytics (GA4: G-L8TLLNDFH9)
- [x] Google Search Console + sitemap送信
- [x] メール送信（自動返信 + 通知、テスト済み）
- [x] Google Reviews（12件実口コミ内蔵カルーセル、Elfsightから移行）
- [x] SEO最適化（45+キーワード、JSON-LD、OGP、hreflang、sitemap）
- [x] nextstory.jpコンテンツ統合
- [x] GPTフィードバック対応（行動導線強化、口コミ改善、信頼訴求）
- [x] スマホデザイン最適化
- [x] Google翻訳防止
- [x] スパムボット対策（ハニーポット）
- [x] ロゴ T-Family_LOGO_gold + T-Family Inc.ゴールドテキスト
