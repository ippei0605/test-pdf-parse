# test-pdf-parse

## はじめに
PDFからテキストを抽出する研究です。

## 使い方
パッケージをインストールします。

```
% npm i
```

l03056m.pdf をテキストに変換します。

```
% npm start > l03056m.txt
```

## 感想
Apache Tika の方が変換の精度が良さそうです。 (Tika で変換したテキスト: tika.txt)