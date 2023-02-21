import Controls from './controls.js'
import {Timer}  from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'
import {
  playBtn,
  pauseBtn,
  stopBtn,
  stopwatchBtn,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

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

const sound = Sound()

const events = Events({controls, timer, sound})
