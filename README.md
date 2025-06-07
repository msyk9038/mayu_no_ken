# 眉の剣 (micro:bit)

このプロジェクトは、BBC micro:bitとNeoPixel LEDを使用した「眉の剣」を実装したものです。

## 概要

micro:bitの動きセンサーを活用し、デバイスの傾きや動きに応じてLEDストリップの色が変化する光る剣のおもちゃです。子どもの遊びや、コスプレ、パフォーマンスなどに活用できます。

## 機能

- 傾きや動きに応じた色の変化
- ボタン操作による色の切り替え
- 複数の色パターン
- 動きに連動した光のエフェクト
- 低消費電力モード

## 使用方法

1. [MakeCode エディタ](https://makecode.microbit.org/)を開く
2. 「読み込む」をクリックし、このリポジトリからダウンロードした .hex ファイルを選択
3. または、「インポート」→「URLから読み込む」を選択し、このリポジトリのURLを入力
4. micro:bitにダウンロードして使用
5. NeoPixel LEDストリップを接続し、剣の形状に取り付けて使用

## ハードウェア要件

- BBC micro:bit
- NeoPixel LEDストリップ（24個のLED、WS2812B推奨）
- 電源（単三電池3-4本または充電式バッテリー）
- ジャンパーワイヤー
- 剣の形状の外装（3Dプリント、プラスチック管、または段ボールなど）

## 配線方法

```
micro:bit Pin 0 --- NeoPixel DIN（データ入力）
micro:bit 3V ----- NeoPixel VCC（電源）※少数のLEDの場合のみ
micro:bit GND ---- NeoPixel GND（グランド）
```

注意: LEDが多い場合は、外部電源を使用してください。

## 操作方法

### ボタン操作
- Aボタン: 緑色に変更
- Bボタン: 紫色に変更
- A+Bボタン同時押し: 特殊エフェクト（レインボーなど）

### 動きセンサー操作
- 左に傾ける: 白色
- 右に傾ける: 白色
- 上に傾ける（ロゴが上）: 赤色
- 下に傾ける（ロゴが下）: 黄色
- 画面を下に向ける: 藍色
- 振る: 点滅エフェクト（コード内で設定可能）

## コードの説明

```typescript
let strip: neopixel.Strip = null
// NeoPixel LEDストリップの初期化（Pin 0に接続、24個のLED）
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)

// 各種ジェスチャーに対する色の設定
input.onGesture(Gesture.TiltLeft, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
input.onGesture(Gesture.TiltRight, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
input.onGesture(Gesture.LogoUp, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onGesture(Gesture.LogoDown, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
})
input.onGesture(Gesture.ScreenDown, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
})

// ボタン操作による色の変更
input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
})
```

## カスタマイズ

コード内の以下の部分を編集することで、動作をカスタマイズできます：

- LEDの数（現在は24個）
- 各ジェスチャーに対応する色
- 特殊エフェクトの追加（A+Bボタン）
- 振った時のエフェクト

## 拡張アイデア

- 音センサーとの連携で音に反応する剣
- 複数の剣を無線通信で連携させる
- 衝撃検出による「ヒット」エフェクト
- バッテリー残量表示機能
- より複雑な光のパターンやアニメーション

## 注意事項

- LEDは明るいので、直接見ないようにしてください
- 多数のLEDを使用する場合は、外部電源を使用してください
- 剣を振り回す際は周囲の安全に注意してください

## ライセンス

MIT

## 作者

msyk9038
