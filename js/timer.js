export function Timer({ minutesDisplay, secondsDisplay, stopControl }) {
  let timerTimeOut
  let minutes = +minutesDisplay.textContent

  function updateTimerDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds

    minutesDisplay.textContent = (newMinutes < 10 ? '0' : '') + newMinutes
    secondsDisplay.textContent = (seconds < 10 ? '0' : '') + seconds
    console.log('Minutes: ', minutes, 'Seconds: ', seconds)
  }

  function resetPomodoro() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(() => {
      let seconds = +secondsDisplay.textContent
      let minutes = +minutesDisplay.textContent

      updateTimerDisplay(minutes, 0)
      if (minutes <= 0 && seconds <= 0) {
        stopControl()
        updateTimerDisplay()
        return
      }

      if (seconds <= 0) {
        seconds = 12
        --minutes
      }

      updateTimerDisplay(minutes, seconds - 1)

      countdown()
    }, 1000)
  }

  function updateMinutes(inputMinutes) {
    minutes = inputMinutes
  }

  function timePause() {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    resetPomodoro,
    updateTimerDisplay,
    updateMinutes,
    timePause
  }
}
