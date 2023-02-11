const playBtn = document.querySelector('.play-btn')
const pauseBtn = document.querySelector('.pause-btn')
const stopwatchBtn = document.querySelector('.stopwatch-btn')
const stopBtn = document.querySelector('.stop-btn')

const soundOnBtn = document.querySelector('.sound-on')
const soundOffBtn = document.querySelector('.sound-off')

let timerTimeOut
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = +minutesDisplay.textContent

function resetPomodoro() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = (minutes < 10 ? '0' : '') + minutes
  secondsDisplay.textContent = (seconds < 10 ? '0' : '') + seconds
  console.log('Minutes: ', minutes, 'Seconds: ', seconds)
}

function countdown() {
  timerTimeOut = setTimeout(() => {
    let seconds = +secondsDisplay.textContent
    let minutes = +minutesDisplay.textContent

    updateTimerDisplay(minutes, 0)
    if (minutes <= 0) {
      resetControls()
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

playBtn.addEventListener('click', play)
pauseBtn.addEventListener('click', pause)
stopBtn.addEventListener('click', stopControl)

soundOnBtn.addEventListener('click', soundOn)
soundOffBtn.addEventListener('click', soundOff)

stopwatchBtn.addEventListener('click', stopwatch)

function play() {
  playBtn.classList.add('hide')
  pauseBtn.classList.remove('hide')
  stopwatchBtn.classList.add('hide')
  stopBtn.classList.remove('hide')

  countdown()
}

function pause() {
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')

  clearTimeout(timerTimeOut)
}

function stopControl() {
  stopBtn.classList.add('hide')
  stopwatchBtn.classList.remove('hide')
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')

  resetPomodoro()
}

function soundOn() {
  soundOnBtn.classList.add('hide')
  soundOffBtn.classList.remove('hide')
}

function soundOff() {
  soundOnBtn.classList.remove('hide')
  soundOffBtn.classList.add('hide')
}

function stopwatch() {
  inputMinutes = prompt('Digite Tempo do Pomodoro?')
  if (isNaN(inputMinutes) || !inputMinutes) {
    resetPomodoro()
    alert('Digite somente numeros!')
    return
  }

  minutes = inputMinutes
  updateTimerDisplay(minutes, 0)
}
