input.onButtonPressed(Button.A, function () {
    basic.showNumber(neuspech)
})
input.onButtonPressed(Button.AB, function () {
    cislo = 0
    body = 0
    neuspech = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(body)
})
input.onGesture(Gesture.Shake, function () {
    cislo = 0
    cislo = randint(1, 6)
    if (cislo == 6) {
        basic.showNumber(cislo)
        basic.pause(100)
        basic.showIcon(IconNames.Yes)
        body += 1
    } else {
        basic.showNumber(cislo)
        neuspech += 1
        basic.pause(100)
        basic.showString("znova")
    }
})
let cislo = 0
let neuspech = 0
let body = 0
body = 0
neuspech = 0
basic.forever(function () {
	
})
