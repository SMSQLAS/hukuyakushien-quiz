外来服薬支援料クイズ（仮問題15問）

【入っているもの】
- index.html：タイトル・説明・クイズ・結果画面
- style.css：デザイン
- script.js：仮問題15問と動作・送信処理
- config.js：Google Apps ScriptのURL
- apps_script.gs：新しいスプレッドシートを使う場合のApps Script

【問題を変更する場所】
script.js の最初にある questions の中を書き換えます。

text：問題文
answer：算定できるなら true、算定できないなら false
explanation：解説

【説明を変更する場所】
index.html の
「外来服薬支援料1」
「外来服薬支援料2」
の文章を書き換えます。

【結果送信】
config.jsには、前回の自家製剤加算クイズで使っていたURLを設定済みです。
同じスプレッドシートへ送信される可能性があります。

新しいスプレッドシートへ分けたい場合は、
apps_script.gsを新しいスプレッドシートのApps Scriptへ貼り付け、
ウェブアプリとしてデプロイしたURLをconfig.jsへ貼ってください。
