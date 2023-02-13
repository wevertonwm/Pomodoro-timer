import Controls from './controls.js'
import { Timer } from './timer.js'

const playBtn = document.querySelector('.play-btn')
const pauseBtn = document.querySelector('.pause-btn')
const stopwatchBtn = document.querySelector('.stopwatch-btn')
const stopBtn = document.querySelector('.stop-btn')

const soundOnBtn = document.querySelector('.sound-on')
const soundOffBtn = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const controls = Controls({
  playBtn,
  pauseBtn,
  stopwatchBtn,
  stopBtn
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  stopControl: controls.stopControl
})

playBtn.addEventListener('click', playEvent)
pauseBtn.addEventListener('click', pauseEvent)
stopBtn.addEventListener('click', stopEvent)
soundOnBtn.addEventListener('click', soundOnEvent)
soundOffBtn.addEventListener('click', soundOff)
stopwatchBtn.addEventListener('click', stopwatchEvent)

function playEvent() {
  controls.play()
  timer.countdown()
}
function pauseEvent() {
  controls.pause()
  timer.timePause()
}

function stopEvent() {
  controls.stopControl()
  timer.resetPomodoro()
}

function soundOnEvent() {
  soundOnBtn.classList.add('hide')
  soundOffBtn.classList.remove('hide')
}

function soundOff() {
  soundOnBtn.classList.remove('hide')
  soundOffBtn.classList.add('hide')
}

function stopwatchEvent() {
  let inputMinutes = controls.getMinutes()
  if (isNaN(inputMinutes) || !inputMinutes) {
    timer.resetPomodoro()
    alert('Digite somente numeros!')
    return
  }
  timer.updateTimerDisplay(inputMinutes, 0)
  timer.updateMinutes(inputMinutes)
}
