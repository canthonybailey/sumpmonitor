//"use strict";
var GPIO = require('rpi-gpio');

var ultrasonicTriggerPin = 23
var ultrasonicEchoPin = 24
var sumpMotorMonitorPin = 25

function setup_gpio() {
    console.log("setup gpio")
    GPIO.setMode(GPIO.MODE_BCM)
    GPIO.setup(ultrasonicTriggerPin, GPIO.DIR_OUT) // ultrasonic trigger
    GPIO.setup(ultrasonicEchoPin, GPIO.DIR_IN)  // ultrasonic echo
    GPIO.setup(sumpMotorMonitorPin, GPIO.DIR_IN, GPIO.EDGE_RISING, sumpPumpMotor)
    console.log('setup gpio complete')
}

setup_gpio()

async function sumpPumpMotor() {
    console.log('sump motor monitor edge detected')
    try{
        value = await GPIO.read(sumpMotorMonitorPin, testfunc)
        console.log("value", value)
    
    } catch (err) {
        console.log(err)
    }
}

function testfunc() {

}

if (require.main === module) { // this module run directly, executing test
    console.log('Running', module.filename)


}