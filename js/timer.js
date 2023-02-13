export function Timer({ minutesDisplay, secondsDisplay, stopControl }) {
  let timerTimeOut
  let minutes = +minutesDisplay.textContent

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = (minutes < 10 ? '0' : '') + minutes
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
      if (minutes <= 0) {
        stopControl()
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
