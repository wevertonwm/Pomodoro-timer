export default function Controls({playBtn,pauseBtn,stopBtn,stopwatchBtn}) {
  function play() {
    playBtn.classList.add('hide')
    pauseBtn.classList.remove('hide')
    stopwatchBtn.classList.add('hide')
    stopBtn.classList.remove('hide')
  }

  function pause() {
    playBtn.classList.remove('hide')
    pauseBtn.classList.add('hide')
  }

  function stopControl() {
    stopBtn.classList.add('hide')
    stopwatchBtn.classList.remove('hide')
    playBtn.classList.remove('hide')
    pauseBtn.classList.add('hide')
  }

  function getMinutes() {
    let inputMinutes = prompt('Digite Tempo do Pomodoro?')

    if (!inputMinutes) {
      return false
    }

    return inputMinutes
  }

  return { stopControl, play, pause, getMinutes }
}
