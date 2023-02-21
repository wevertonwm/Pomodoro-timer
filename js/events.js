import {playBtn, pauseBtn, stopBtn, stopwatchBtn, soundOnBtn, soundOffBtn} from './elements.js'

export default function Events({controls, timer, sound}) {
  playBtn.addEventListener('click', playEvent)
  pauseBtn.addEventListener('click', pauseEvent)
  stopBtn.addEventListener('click', stopEvent)
  soundOnBtn.addEventListener('click', soundOnEvent)
  soundOffBtn.addEventListener('click', soundOffEvent)
  stopwatchBtn.addEventListener('click', stopwatchEvent)

  function playEvent() {
    controls.play()
    timer.countdown()
    sound.pressPlay()
  }
  function pauseEvent() {
    controls.pause()
    timer.timePause()
    sound.pressPlay()
  }

  function stopEvent() {
    controls.stopControl()
    timer.resetPomodoro()
    sound.pressStowatch()
  }

  function soundOnEvent() {
    soundOnBtn.classList.add('hide')
    soundOffBtn.classList.remove('hide')
    sound.pressVolume()
  }

  function soundOffEvent() {
    soundOnBtn.classList.remove('hide')
    soundOffBtn.classList.add('hide')
    sound.pressVolume()
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

  return { 
    playEvent, stopEvent,pauseEvent, stopEvent, soundOnEvent, soundOffEvent, stopwatchEvent
   }
}
