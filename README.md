# 環境

node: v16.13.2
npm: v9.1.1

# 環境構築

```bash
npm install
npm run dev
```

# ディレクトリ構成

### lib

ライブラリのラッパー

### components

再利用性のある UI コンポーネント群

- atoms
  - 最小のコンポーネント単位
  - ex. ボタン、タイトル
- molecules
  - Atoms を最低一つ含む単一機能のコンポーネント
  - 自身の wrap を許す
  - section 以下
  - ex. フォーム要素、テーブルヘッダー
- organisms
  - 自身の wrap を許す
  - section 単位以上
  - ドメインが入ったら Organisms。
  - 他に依存するコンポーネントがなかったとしても、ドメインが入った時点で Organisms にする。
  - useContext による Context 接続可。
  - その機能のための API を叩くのはここ。
  - ex. フォーム、ヘッダー、テーブル

### prisma

prisma 関連

### types

型定義

###

Open [http://localhost:3000](http://localhost:3000)

# コーディング規約

- Throw を使わない。
  理由: 呼び出し側で型がわからない。またコードを読まないと何が帰ってくるかわからない。
  neverthrow の Result 型を代わりに使う。

- class は書かない。
  entity の型を基点にしたファイルを作りコアロジックは関数で作る

- ドメインモデルのプロパティは ValueObject に入れる
  理由: 不正な値が入らない。取り違えが減る。
  [newtype](https://speakerdeck.com/naoya/typescript-niyoru-graphql-batukuendokai-fa-75b3dab7-90a8-4169-a4dc-d1e7410b9dbd?slide=91)で作る。

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
