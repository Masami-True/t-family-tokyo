# T-Family Corporate Website

## Project Overview
T-Family株式会社（後株）のコーポレートサイト
- **本番URL**: https://t-family.tokyo ✅ LIVE（非www が Primary、www は 308 Permanent でリダイレクト）
- **Vercel URL**: https://t-family-tokyo.vercel.app/
- **GitHub**: https://github.com/Masami-True/t-family-tokyo
- **Tech**: Next.js 16 + Tailwind CSS v4 + next-intl v4 (6言語: EN/JA/ZH/KO/ES/FR)
- **自動言語判別**: ブラウザのAccept-Languageヘッダーで自動判別（位置情報ではなくブラウザ言語設定ベース）
- **Google翻訳防止**: `<meta name="google" content="notranslate">` + `class="notranslate"` 設定済み
- **Google Analytics**: G-L8TLLNDFH9 ✅
- **Google Search Console**: 所有権確認済み + sitemap送信済み + TOPページ等を優先クロールキューに追加済み ✅
- **Google Business Profile**: オーナー登録済み（⭐4.8 / クチコミ27件 / 月2,759表示） ✅
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
- **Vercel Primary Domain**: `t-family.tokyo`（非www）
- **Vercel www→非www リダイレクト**: 308 Permanent Redirect（SEO最適）
- Vercel環境変数: SMTP_HOST=smtp.gmail.com, SMTP_PORT=587, SMTP_USER=tominaga@t-family.tokyo, SMTP_PASS=アプリパスワード

## SEO ✅ 完全リファクタ済み（2026/04 大幅改善）
- **メタタグ（layout）**: title.template `%s | T-Family株式会社` + default title
- **TOPページ title**: `title: { absolute: ... }` でテンプレートをバイパスしてフルマーケティングタイトル
- **canonical（重要）**: 全ページ `generateMetadata({ params })` で **locale-aware** に動的生成
  - TOP: `https://t-family.tokyo/${locale}` （URLと完全一致、ロケールミスマッチ解消）
  - 他ページ: `https://t-family.tokyo/${locale}/${path}` 同様に locale-aware
- **hreflang**: 各ページで明示的に 6言語 + `x-default` を `alternates.languages` に設定（layout からの shallow-merge 消失問題を解消）
- **og:url / og:locale**: 各ページで locale 別に生成（`ja→ja_JP`, `en→en_US`, `zh→zh_CN`, `ko→ko_KR`, `es→es_ES`, `fr→fr_FR`）
- **JSON-LD構造化データ（3種）**:
  - `LocalBusiness` — 店舗情報、営業時間、GPS、aggregateRating（既存）
  - `Organization` — `name: "T-Family"` (primary), `legalName: "T-Family株式会社"`, founder, contactPoint, sameAs（新規）
  - `WebSite` — `name: "T-Family"`, publisher refs Organization via `@id`（新規）
  - 用途: 「T-Family」単独でのブランド認識 + サイトリンク検索ボックス獲得
- **キーワード（60+）**: T-Family, 中古ブランド, 中古ブランドショップ, ブランドバッグ, 中古ブランド銀座/新橋, ライバー, ライブセラー, **バイヤー, リセラー, 卸, 卸売り, Buyer, Reseller, Wholesale, Wholesaler, Distributor, Export, 越境EC, 海外仕入れ**, 全ブランド名+BAG, inbound shopping Tokyo
- **OGP + Twitterカード**: SNS共有最適化
- **sitemap.xml**: 全6言語×5ページ = 30URL → Search Console送信済み（非wwwで統一）
- **robots.txt**: クローラー許可、/api/除外
- **SEOテキスト**: sr-onlyで非表示（**キーワード羅列はスパムリスクのため削除済み**、自然な散文のみ）
- **nextstory.jpリンク**: フッターに相互リンク

## SEO 修正履歴（2026/04 「TOPページが検索で出ない」問題の根本対応）
**問題**: Google検索で「T-Family株式会社」と検索したとき、`/company` や `/privacy` が上位表示され TOP ページが出てこなかった
**原因**:
1. `Vercel` で `www.t-family.tokyo` が Primary、307 で全アクセスを www にリダイレクトしていた
2. `sitemap.xml` と `canonical` は非www（`https://t-family.tokyo/...`）で記述
3. つまりGoogleが取得したURL（www）とページが宣言する canonical（非www）が**不一致** → リダイレクトエラー扱いでインデックス失敗
4. TOPページの canonical が `https://t-family.tokyo`（ロケール無し）で実URL `/ja` と不一致
5. 各ページの canonical が `/ja/...` にハードコード → 多言語ページが独立評価されない
**対応**:
1. Vercel Primary Domain を非wwwに変更、www→非wwwリダイレクトを **308 Permanent** に
2. 全ページ metadata を `generateMetadata` 化、locale-aware canonical
3. layout の `alternates.languages` が page で shallow merge により消失していた問題を、各ページで明示的に languages を再定義して解決
4. og:url / og:locale も locale-aware に
5. company ページのタイトル重複（`会社概要 | T-Family株式会社 | T-Family株式会社`）を修正
6. sr-only のパイプ区切りキーワード羅列を削除（hidden-text スパム判定リスク回避）
7. Search Console で TOP・主要ページを優先クロールキューに追加
8. Codex でセカンドオピニオン2回実施、P0/P1 全対応

## Pages
- `/` → 自動的に locale 付きパス（例: `/ja`）にリダイレクト
- `/[locale]/` — メインLP
  - Hero（13枚KV、1.5秒/1枚目2秒、スマホ2x2ボタン、安心訴求バッジ3つ横並び、subcopy白色改行）
  - TrustBar（ブランド名スクロール）
  - Philosophy（富士山＋桜＋河口湖写真全面背景、白ガラスカード）
  - **CollectionPreview**（6ブランドの**キービジュアル**：t-secondhands.jp ホームページの BRAND セクションと同じ画像。日本の名所×モデル×ブランドバッグの構図、ブランド名を画像下部にダークグラデーション+白文字オーバーレイ表示）
    - CHANEL（東京駅丸の内）
    - HERMÈS（紅葉×日本庭園）
    - LOUIS VUITTON（金閣寺）
    - PRADA（富士山×桜）
    - GUCCI（東京タワー×日章旗）
    - FENDI（金屏風×行灯）
    - 各カード → クリックで該当ブランドコレクションへ遷移（t-secondhands.jp）
  - Authenticity（6カード左揃え + T-Family紹介文 + Entrupy証明書セクション）
  - GoogleReviews（サイト内蔵12件実口コミカルーセル、連続スムーススクロール、Googleカラータイトル、レビュー投稿ボタン）
  - LiveCommerce（ライブセラー募集中、3ステップ改行対応、全テキスト白）
  - B2BSection（業者様・バイヤー様向けご案内、全テキスト白）
  - CeoGreeting（PC:写真左グラデ+テキスト右、スマホ:タイトル→写真+名前→メッセージ、ベージュ背景）
  - ContactForm（お問い合わせフォーム、ハニーポットスパム対策付き）
  - StoreInfo（店舗情報、Google Maps、支払方法）
  - Footer（SNS、会社概要/特商法/プライバシー/nextstory.jp、テキスト明るく）
  - FloatingContact（WhatsAppのみ）
  - SEOテキスト（sr-only非表示、自然な散文）
- `/[locale]/liveseller/` — ライブセラー応募フォーム（ハニーポットスパム対策付き）
- `/[locale]/company/` — 会社概要（TEL 03-6822-8487 + EMAIL info@t-family.tokyo）
- `/[locale]/tokusyohou/` — 特定商取引法に基づく表記
- `/[locale]/privacy/` — プライバシーポリシー（9項目）
- `/buyer01/` — **Netlify rewrite**（URL は `https://t-family.tokyo/buyer01/` のまま、コンテンツは `https://t-family-buyer.netlify.app/buyer01/` をプロキシ）
  - 以前は `redirect()` で URL が変わってしまう実装だったが、`next.config.ts` の `rewrites` に変更
  - `/buyer01/*` 用に CSP を緩和（cdnjs, web3forms, GAS 等の外部スクリプト許可）

## Security ✅
- XSS: X-XSS-Protection + HTMLサニタイズ
- クリックジャッキング: X-Frame-Options: DENY
- MIME Sniffing: X-Content-Type-Options: nosniff
- HTTPS: HSTS 2年
- CSP: スクリプト/スタイル/画像/フレーム制限（`/buyer01/*` は外部リソース用に緩和）
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
- **CollectionPreview**: t-secondhands.jp BRANDセクションと同じキービジュアルを使用、画像下部にブランド名オーバーレイ（ダークグラデ + 白文字 + tracking-[0.25em] + drop-shadow）
- **Google口コミ**: Elfsightから移行→サイト内蔵カルーセル（12件実口コミ、連続スムーススクロール、正方形カード、評価数非表示、レビュー投稿ボタンあり）
- **CEO挨拶**: PC=写真左グラデーション+テキスト右、スマホ=タイトル→写真+名前→メッセージ
- **全テキスト白**: ダークセクション（LiveCommerce・B2B）のグレー→白
- **フッター**: テキスト明るく（/80）、nextstory.jpリンク
- **Google翻訳防止**: notranslateメタ+クラス+ブランド名translate="no"
- **スパム対策**: 全フォームにハニーポットフィールド

## External Links
- Shop: https://t-secondhands.jp/
- Instagram: https://www.instagram.com/tfamily.inc/
- Facebook: https://www.facebook.com/profile.php?id=61576088344723
- WhatsApp: https://wa.me/message/YLKX2G23XTTKM1
- YouTube: https://www.youtube.com/@T-Family-727
- X: https://x.com/NextStory7
- nextstory.jp: https://nextstory.jp/
- Buyer: https://t-family.tokyo/buyer01/ → Netlify rewrite（URL維持）
- Google Review投稿: https://g.page/r/CT5WXUVxa3XmEAI/review

## Image Sources
- キービジュアル: HP作成/キービジュアル/ 全画像
- CEO写真: ceo-portrait.png（Gemini）+ ceo-portrait.jpg（実写）
- Philosophy背景: fuji-sakura.jpg
- Entrupy証明書: entrupy.png
- ロゴ: logo-gold.png（T-Family_LOGO_gold、白背景透過処理済み、mix-blend-lighten）
- ファビコン: T-Family_LOGO (2).jpg から生成
- **CollectionPreview**: t-secondhands.jp Shopify CDN から直接配信（next.config.ts で whitelist 済み）

## COMPLETED ✅
- [x] サイト構築（Next.js 16 + 6言語）
- [x] カスタムドメイン（t-family.tokyo → Vercel + Value Domain DNS）
- [x] セキュリティ強化（CSP, HSTS, XSS, Rate Limiting, ハニーポット）
- [x] Google Analytics (GA4: G-L8TLLNDFH9)
- [x] Google Search Console + sitemap送信 + 主要ページ優先クロールリクエスト
- [x] **Google Business Profile**（既にオーナー登録済み、⭐4.8/27件）
- [x] メール送信（自動返信 + 通知、テスト済み）
- [x] Google Reviews（12件実口コミ内蔵カルーセル、Elfsightから移行）
- [x] **SEO リファクタ完了（2026/04）**:
  - locale-aware canonical（generateMetadata化）
  - 6言語hreflang + x-default を全ページに明示
  - og:url / og:locale を locale 別に生成
  - title 重複修正（company ページ）
  - sr-only キーワード羅列削除（スパムリスク回避）
  - Organization + WebSite JSON-LD schema 追加
  - バイヤー/リセラー/卸 等 16キーワード追加
  - Codex セカンドオピニオン 2回実施
- [x] **Vercel ドメイン設定変更**: 非wwwをPrimary、www→非wwwを308 Permanent
- [x] **buyer01 を redirect から rewrite に変更**（URL維持でNetlifyコンテンツをプロキシ）
- [x] nextstory.jpコンテンツ統合
- [x] GPTフィードバック対応（行動導線強化、口コミ改善、信頼訴求）
- [x] スマホデザイン最適化
- [x] Google翻訳防止
- [x] スパムボット対策（ハニーポット）
- [x] ロゴ T-Family_LOGO_gold + T-Family Inc.ゴールドテキスト
- [x] **CollectionPreview リニューアル**: t-secondhands.jp BRANDキービジュアル6種（日本×ラグジュアリー）+ 各画像にブランド名オーバーレイ
