# server のセットアップ

remote repo を local に clone

```shell
git clone git@github.com:kosuke-17/techfolio.git
```

docker image 作成 & 起動

```shell
docker compose up -d
```

prisma の設定

```shell
npx prisma init
npx prisma db push
npx prisma migrate dev

```

マイグレーションファイルの追加

```shell
npx prisma migrate dev

# 編集の場合(edit、deleteではなくadd)
npx prisma migrate dev --create-only

# 確認
# → 情報を追加しておく{"email":"test@test.com","name":"田中太郎","password":"1"}
npx prisma studio

```

参考記事 : https://www.prisma.io/docs/concepts/components/prisma-migrate#customizing-migrations

```shell
# apiサーバー起動
yarn dev

# 確認: http://localhost:3031/api/users
# 空の配列又は[{"id":"cl8borg7h0007oo82dlad3lt2","createdAt":"2022-09-21T13:53:44.141Z","updatedAt":"2022-09-21T13:53:23.286Z","email":"test@test.com","name":"田中太郎","password":"1"}]のように追加済のuserデータが帰ってくること
```
