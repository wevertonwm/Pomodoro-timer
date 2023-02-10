const playBtn = document.querySelector('.play-btn')
const pauseBtn = document.querySelector('.pause-btn')
const stopwatchBtn = document.querySelector('.stopwatch-btn')
const stopBtn = document.querySelector('.stop-btn')

const soundOnBtn = document.querySelector('.sound-on')
const soundOffBtn = document.querySelector('.sound-off')

let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')



playBtn.addEventListener('click', play)
pauseBtn.addEventListener('click', pause)
stopBtn.addEventListener('click', stops)

soundOnBtn.addEventListener('click', soundOn)
soundOffBtn.addEventListener('click', soundOff)

stopwatchBtn.addEventListener('click', stopwatch)

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

function stops() {
  stopBtn.classList.add('hide')
  stopwatchBtn.classList.remove('hide')

  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
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
  minutes = prompt('Quantos minutos?')
  minutesDisplay.textContent = minutes
}
