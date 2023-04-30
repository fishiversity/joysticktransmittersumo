input.onButtonPressed(Button.A, function () {
    comment.comment("DON'T CHANGE THIS CODE!")
    radio.sendValue("A", 1)
})
input.onButtonPressed(Button.AB, function () {
    comment.comment("DON'T CHANGE THIS CODE!")
    radio.sendValue("AB", 1)
})
input.onButtonPressed(Button.B, function () {
    comment.comment("DON'T CHANGE THIS CODE!")
    radio.sendValue("B", 1)
})
let y = 0
let x = 0
joystickbit.initJoystickBit()
comment.comment("CHANGE THE RADIO GROUP TO YOUR TEAM'S JOYSTICK NUMBER!")
comment.comment("DO NOT CHANGE ANYTHING ELSE IN THIS CODE")
radio.setGroup(40)
basic.showIcon(IconNames.Yes)
basic.showString("T")
basic.forever(function () {
    comment.comment("DON'T CHANGE THIS CODE!")
    x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -100, 100)
    y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 1023, 0, 100, -100)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendValue("C", 1)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendValue("D", 1)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendValue("E", 1)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendValue("F", 1)
    }
})
