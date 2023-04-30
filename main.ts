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
})
