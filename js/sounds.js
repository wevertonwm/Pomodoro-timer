export default function () {
  const playSound = new Audio('/assets/sound/play_pause.mp3')
  const stopwatchSound = new Audio('/assets/sound/stop.mp3')
  const alerm = new Audio('/assets/sound/alarm_clock.mp3')
  const volumeSound = new Audio('/assets/sound/volume.mp3')

  function pressPlay() {
    playSound.play()
  }

  function pressStowatch() {
    stopwatchSound.play()
  }

  function pressVolume() {
    volumeSound.play()
  }

  function timeEnd() {
    alerm.play()
  }

  return {
    pressPlay,
    pressStowatch,
    pressVolume,
    timeEnd
  }
}
