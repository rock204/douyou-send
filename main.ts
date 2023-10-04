input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(3000)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    mode = 1
    radio.sendString("Start")
    st_time = input.runningTime()
})
function end_sub () {
    mode = 0
    basic.showIcon(IconNames.No)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    radio.sendString("End")
    basic.pause(1000)
    basic.showIcon(IconNames.SmallSquare)
}
input.onButtonPressed(Button.B, function () {
    end_sub()
})
let st_time = 0
let mode = 0
radio.setGroup(1)
input.setAccelerometerRange(AcceleratorRange.OneG)
basic.showString("Start->A")
mode = 0
basic.showIcon(IconNames.SmallSquare)
basic.forever(function () {
    if (mode == 1) {
        if (input.runningTime() - st_time <= 10000) {
            radio.sendNumber(input.acceleration(Dimension.Strength))
        } else {
            end_sub()
        }
    }
})
