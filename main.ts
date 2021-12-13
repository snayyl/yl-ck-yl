input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    soundExpression.yawn.playUntilDone()
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(300)
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(300)
})
input.onButtonPressed(Button.A, function () {
    soundExpression.giggle.play()
    robotbit.Servo(robotbit.Servos.S2, 0)
    basic.pause(300)
    robotbit.Servo(robotbit.Servos.S2, 180)
    basic.pause(300)
})
input.onButtonPressed(Button.AB, function () {
    soundExpression.hello.play()
    robotbit.Servo(robotbit.Servos.S4, 0)
    basic.pause(300)
    robotbit.Servo(robotbit.Servos.S4, 180)
    basic.pause(300)
})
input.onButtonPressed(Button.B, function () {
    soundExpression.spring.play()
    robotbit.Servo(robotbit.Servos.S3, 0)
    basic.pause(300)
    robotbit.Servo(robotbit.Servos.S3, 180)
    basic.pause(300)
})
basic.forever(function () {
	
})
