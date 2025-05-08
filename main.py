def LightServo():
    global newReading
    newReading = SmartCity.read_light_sensor(AnalogPin.P2)
    OLED.write_num_new_line(newReading)
newReading = 0
OLED.init(128, 64)
servos.P1.set_angle(0)

def on_forever():
    LightServo()
basic.forever(on_forever)
