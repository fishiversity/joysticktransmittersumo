let y = 0
let x = 0
joystickbit.initJoystickBit()
radio.setGroup(40)
basic.showIcon(IconNames.Yes)
basic.showString("T")
basic.forever(function () {
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
