# iot-promotionpage

### クローンしたら初めにやること
* package.json のあるディレクトリで npm install

### 仕様
* 基本的にいじるのはdevelopmentの中身とproduction/index.htmlのみ
* cssのメタ言語としてless(基本的にsassと同じ)を使用 いじるのはdevelopment/less/module/の中
* タスク自動化ツールとしてGrunt(gulpと同じようなもの)を使用

### Gruntのコマンド
Gruntfile.js があるディレクトリで
* grunt watch → less jsファイルの監視
* grunt copy_img → develop/img/のファイルをproduction/img/にコピー
* grunt build_img → 画像の圧縮
