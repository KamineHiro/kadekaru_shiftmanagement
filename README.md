# Create React Appで始める

このプロジェクトは、Create React Appを使用して作成されました。

## 利用可能なスクリプト

プロジェクトディレクトリで、以下のコマンドを実行できます。

### npm start
開発モードでアプリを起動します。
ブラウザで http://localhost:3000 を開いて表示します。

ファイルを変更するとページがリロードされます。
また、コンソールにLintエラーが表示される場合もあります。

### npm test
インタラクティブなウォッチモードでテストランナーを起動します。
詳細はテストの実行のセクションを参照してください。

### npm run build
アプリを本番用に build フォルダにビルドします。
本番モードでReactを正しくバンドルし、パフォーマンスを最適化します。

ビルドは圧縮され、ファイル名にはハッシュが含まれます。
アプリはデプロイする準備が整いました！

詳細はデプロイのセクションを参照してください。

### npm run eject
注意: この操作は元に戻せません。ejectを実行すると、元に戻すことはできません！

ビルドツールや設定に満足できない場合は、いつでも eject を実行できます。このコマンドはプロジェクトから唯一のビルド依存を削除します。

代わりに、すべての設定ファイルと依存関係（webpack、Babel、ESLintなど）をプロジェクトにコピーします。これにより、フルコントロールが得られます。eject以外のコマンドは引き続き機能しますが、コピーされたスクリプトを使用することになります。この時点では、自己責任で設定を変更してください。

ejectを使用する必要はありません。このツールセットは、小規模および中規模のデプロイメントに適しており、特にカスタマイズが必要でない限り、使用する必要はありません。

### 詳しく学ぶ

Create React Appのドキュメントで、さらに詳しく学ぶことができます。

Reactを学ぶには、Reactのドキュメントを参照してください。

### コード分割
このセクションはここに移動しました: https://facebook.github.io/create-react-app/docs/code-splitting

# バンドルサイズの分析
このセクションはここに移動しました: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

# プログレッシブWebアプリの作成
このセクションはここに移動しました: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

# 詳細設定
このセクションはここに移動しました: https://facebook.github.io/create-react-app/docs/advanced-configuration

# デプロイ
このセクションはここに移動しました: https://facebook.github.io/create-react-app/docs/deployment

npm run build が圧縮に失敗する場合
このセクションはここに移動しました: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# シフトスケジューラー

## 概要
シフトスケジューラーは、シフト管理を効率化するためのWebアプリケーションです。React.jsを使用して構築されています。

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

## 機能
- シフトの作成・編集・削除
- スケジュール管理
- ユーザー管理

## 技術スタック
- React.js
- TypeScript
- PWA対応

## PWA対応について
このアプリケーションはPWA（Progressive Web App）として構築されており、以下の機能を提供します：

- オフライン対応
- ホーム画面へのインストール機能
- アプリケーションアイコン
  - favicon.ico (64x64, 32x32, 24x24, 16x16)
  - icon192.png (192x192)
  - icon512.png (512x512)

## 開発方法
1. `npm start` で開発サーバーを起動
2. ブラウザで `http://localhost:3000` にアクセス
3. コードの変更は自動的に反映されます

## ビルド方法
```bash
npm run build
```
ビルドされたファイルは `build` ディレクトリに生成されます。

## ライセンス
MIT

## 注意事項
- JavaScriptを有効にする必要があります
- モダンブラウザでの使用を推奨します

## 貢献方法
1. このリポジトリをフォーク
2. 新しいブランチを作成
3. 変更をコミット
4. プルリクエストを作成

## サポート
問題や提案がある場合は、Issueを作成してください。
