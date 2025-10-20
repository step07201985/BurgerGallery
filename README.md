# BurgerGallery

神戸の絶品ジューシーバーガー専門店のレスポンシブWebサイト

## 概要

ジューシーでボリューム満点のハンバーガーが楽しめる、地元で愛されるハンバーガー屋のWebサイトです。

## 技術スタック

- **HTML5**: セマンティックマークアップ
- **SCSS**: FLOCSS設計パターン
- **JavaScript (ES6+)**: Vanilla JS (jQueryなし)
- **レスポンシブ対応**: モバイル/タブレット/PC

## ブレークポイント

- **SP (スマホ)**: ～399px
- **Tablet**: 400px～834px
- **PC**: 835px～

## セットアップ

### 前提条件

Node.js (v14以上)

### インストール

```bash
npm install
```

### 開発

```bash
npm run dev
```

SCSSファイルを監視し、変更時に自動でCSSにコンパイルします。

### ビルド

```bash
npm run build
```

本番用にCSSを圧縮してビルドします。

## プロジェクト構造

```
BurgerGallery/
├── index.html
├── css/                  # コンパイル済みCSS
├── scss/                 # SCSS源ファイル
│   ├── Foundation/       # 基盤スタイル
│   ├── Layout/           # レイアウト
│   └── Object/           # コンポーネント/プロジェクト
├── js/                   # JavaScript
├── images/               # 画像ファイル
└── package.json
```

## 主な機能

- レスポンシブサイドメニュー(モバイル: オーバーレイ / PC: 固定表示)
- Escキーでメニューを閉じる機能
- Web Animations APIによるスムーズなアニメーション
- アクセシビリティ対応(ARIA属性、キーボード操作)

## ブラウザサポート

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## ライセンス

MIT

## 作成者

RaiseTech
