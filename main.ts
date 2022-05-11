radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cuteBot.moveTime(cuteBot.Direction.left, 40, 1)
        basic.showLeds(`
            . # . . .
            # . . . .
            # # # # #
            # . . . .
            . # . . .
            `)
    } else if (receivedNumber == 2) {
        cuteBot.moveTime(cuteBot.Direction.right, 40, 1)
        basic.showLeds(`
            . . . # .
            . . . . #
            # # # # #
            . . . . #
            . . . # .
            `)
    } else if (receivedNumber == 3) {
        cuteBot.forward()
        basic.showLeds(`
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (receivedNumber == 4) {
        cuteBot.backforward()
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            `)
    } else {
        cuteBot.stopcar()
    }
})
radio.setGroup(7)
