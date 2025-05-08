function LightServo () {
    newReading = SmartCity.read_light_sensor(AnalogPin.P2)
    OLED.writeNumNewLine(newReading)
    if (newReading < 40) {
        servos.P1.setAngle(180)
    } else {
        servos.P1.setAngle(0)
    }
}
let newReading = 0
OLED.init(128, 64)
servos.P1.setAngle(0)
basic.forever(function () {
    LightServo()
})
