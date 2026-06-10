# LocPipe

インディーゲーム開発者向けのAIローカライズパイプライン（開発中）。
現在は LP（事前登録）フェーズ。プロダクト要件・計画は `../docs/` を参照。

## 開発

```bash
npm install
npm run dev        # http://localhost:3000 (日本語) / /en (English)
npm test           # ユニットテスト (vitest)
npm run typecheck  # 型チェック
npm run lint
```

## セットアップ（事前登録を有効にする）

1. [Supabase](https://supabase.com) でプロジェクトを作成（無料枠）
2. SQL Editor で `supabase/schema.sql` を実行
3. `.env.example` を `.env.local` にコピーし、Project Settings > API の値を設定
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`（service_role キー。クライアントに公開しないこと）

環境変数が未設定の場合、フォーム送信は 503 を返します（LP自体は表示可能）。

## デプロイ（Vercel）

1. GitHub にリポジトリを push
2. Vercel でリポジトリを import（フレームワーク自動検出）
3. 環境変数に `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` を設定
4. main への push で自動デプロイ、PR でプレビューURL発行

注意: Vercel Hobby プランは商用利用不可。課金機能の公開前に Pro へ移行すること。

## 構成

- `app/(ja)/` — 日本語LP (`/`)、`app/(en)/en/` — 英語LP (`/en`)
- `app/api/waitlist/` — 事前登録API（Supabaseへ保存、ハニーポット式スパム対策）
- `lib/waitlist.ts` — 入力検証（純粋関数・テスト対象）
- `supabase/schema.sql` — DBスキーマ
- `.github/workflows/ci.yml` — lint / typecheck / test / build
