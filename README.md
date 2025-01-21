# シフト表作成アプリ

## 概要
このアプリは、シフト管理を効率化するためのWebアプリケーションです。React.jsを使用して構築されています。

## デモ
[https://kadekaru-shiftmanagement.vercel.app](https://kadekaru-shiftmanagement.vercel.app)

## 機能
- シフトの作成・編集・削除
- 2週間分のシフト管理
- ランチ・ディナーの簡単入力
- シフト表のコピー機能

## 技術スタック
- React.js
- TypeScript
- PWA対応
- CSS Modules
- Vercel (デプロイ)

## インストール方法

```bash
# リポジトリのクローン
git clone [リポジトリURL]

# 依存関係のインストール
cd shift-scheduler
npm install

# 開発サーバーの起動
npm start
```

## 使用方法
1. 開始日を選択
2. 各日付に対して以下のいずれかの方法でシフトを入力:
   - 手動で時間を入力
   - 「ランチ」ボタン (9:00-16:00)
   - 「ディナー」ボタン (17:00-22:00)
3. 「クリア」ボタンで入力をリセット
4. 「出力結果をコピー」ボタンで整形されたシフト表をクリップボードにコピー

## PWA対応について
このアプリケーションはPWA（Progressive Web App）として構築されており、以下の機能を提供します：

- オフライン対応
- ホーム画面へのインストール機能
- アプリケーションアイコン
  - favicon.ico (64x64, 32x32, 24x24, 16x16)
  - icon192.png (192x192)
  - icon512.png (512x512)

## デプロイ
このアプリケーションは[Vercel](https://vercel.com)にデプロイされています。
デプロイ先: [https://kadekaru-shiftmanagement.vercel.app](https://kadekaru-shiftmanagement.vercel.app)

## 開発方法
1. `npm start` で開発サーバーを起動
2. ブラウザで `http://localhost:3000` にアクセス
3. コードの変更は自動的に反映されます

## 利用可能なスクリプト

### `npm start`
開発モードでアプリを起動します。
http://localhost:3000 で確認できます。

### `npm test`
テストランナーを対話モードで起動します。

### `npm run build`
本番用にアプリをビルドします。
`build`フォルダに最適化された成果物が生成されます。

### `npm run eject`
⚠️ 注意: この操作は取り消せません！
設定をカスタマイズする必要がある場合のみ使用してください。

## ブラウザサポート
- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 注意事項
- JavaScriptを有効にする必要があります
- モダンブラウザでの使用を推奨します
- レスポンシブ対応済み

## 貢献方法
1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## バグ報告
バグを発見した場合は、以下の情報と共にIssueを作成してください：
- バグの詳細な説明
- 再現手順
- 期待される動作
- 実際の動作
- スクリーンショット（可能な場合）

## ライセンス
MIT

## 作者
akamine hiroki

## サポート
問題や提案がある場合は、Issueを作成してください。
