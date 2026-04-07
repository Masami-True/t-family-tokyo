# T-Family Corporate Website

## Project Overview
T-Family株式会社（後株）のコーポレートサイト
- **URL**: https://t-family-tokyo.vercel.app/ (本番予定: t-family.tokyo)
- **GitHub**: https://github.com/Masami-True/t-family-tokyo
- **Tech**: Next.js 16 + Tailwind CSS v4 + next-intl v4 (6言語: EN/JA/ZH/KO/ES/FR)

## Company Info
- 会社名: T-Family株式会社（後株 ← 株式会社T-Familyではない）
- 代表: 富永 朝樹（とみなが あさき）
- 住所: 東京都港区西新橋1丁目18-11 ル・グラシエルBLDG 15号館5F
- TEL: 03-6823-2699
- EMAIL: info@t-family.tokyo（メーリスト）
- 管理者メール: tominaga@t-family.tokyo
- 設立: 2020.11.27 / 資本金: 3000万円 / 従業員: 8名
- 古物商許可: 第301132115776号

## Domain & Hosting
- ドメインレジストラ: Value Domain
- メール: Google Workspace (Gmail) — tominaga@t-family.tokyo がSMTP送信元
- ホスティング: Vercel (Hobby plan, GitHub: Masami-True)
- Vercel環境変数: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS 設定済み

## Pages
- `/` — メインLP（Hero → TrustBar → Philosophy → Collection → Authenticity → GoogleReviews → LiveCommerce → B2B → CeoGreeting → Store → Footer）
- `/liveseller/` — ライブセラー応募フォーム（/api/apply でメール送信）
- `/tokusyohou/` — 特定商取引法に基づく表記
- `/buyer01/` — 外部リンク (https://t-family.tokyo/buyer01/)

## Key Decisions
- WeChat関連は全削除済み
- フッターのロゴは削除済み（余白も縮小）
- ライブセラー応募フォームはFormspreeではなくnodemailer API route
- 自動返信: tominaga@t-family.tokyoから送信、Reply-To: info@t-family.tokyo
- 通知: info@t-family.tokyoメーリスに送信
- キービジュアル: 8枚のブランドバッグ画像スライダー（object-contain、背景にブランド名流れるテキスト）
- 厳選アイテム: ブランド名大きく表示、商品タイトル削除
- ヘッダー: ダーク背景、Cormorant Garamondフォント、ロゴ90px→クリックでTOPへ
- B2B CTA → 「詳細はこちら」で https://t-family.tokyo/buyer01/ へ外部リンク

## External Links
- Shop: https://t-secondhands.jp/
- Instagram: https://www.instagram.com/tfamily.inc/
- Facebook: https://www.facebook.com/profile.php?id=61576088344723
- WhatsApp: https://wa.me/message/YLKX2G23XTTKM1
- YouTube: https://www.youtube.com/@T-Family-727
- X: https://x.com/NextStory7
- nextstory.jp: https://nextstory.jp/

## TODO (remaining)
- [ ] カスタムドメイン設定 (t-family.tokyo → Vercel, Value DomainでDNS変更)
- [ ] メール送信テスト（Redeploy後に /liveseller/ フォームで確認）
- [ ] Entrupy証明書画像を正式なものに差し替え（現在sample_watermarked.png）
