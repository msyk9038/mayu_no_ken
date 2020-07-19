input.onGesture(Gesture.TiltRight, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
input.onGesture(Gesture.TiltLeft, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
input.onGesture(Gesture.LogoUp, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onGesture(Gesture.ScreenDown, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
})
input.onGesture(Gesture.LogoDown, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
