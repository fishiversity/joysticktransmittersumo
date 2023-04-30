input.onButtonPressed(Button.A, function () {
    comment.comment("DON'T CHANGE THIS CODE!")
    radio.sendString("A")
})
input.onButtonPressed(Button.AB, function () {
    comment.comment("DON'T CHANGE THIS CODE!")
    radio.sendString("AB")
})
input.onButtonPressed(Button.B, function () {
    comment.comment("DON'T CHANGE THIS CODE!")
    radio.sendString("B")
})
// This is the code that gets downloaded to the Joystick:Bit
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
        radio.sendString("C")
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendString("D")
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendString("E")
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendString("F")
    }
})
