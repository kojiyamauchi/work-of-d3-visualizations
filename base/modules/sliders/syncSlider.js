'use strict'

// Import Json.
import timeAlignment from '../../json/timeAlignment.json'

// Sync Setting Movies <-> Slider.
const syncSlider = () => {
  const movie = document.getElementById('fn-movie')
  const slider = document.querySelector('.fn-slider')
  slider.addEventListener('input', () => {
    const time = slider.value / 10
    movie.currentTime = time
  })
  movie.addEventListener('timeupdate', () => {
    const val = movie.currentTime * 10
    const addTimeTarget = document.querySelector('.fn-time')
    const addMeridiemTarget = document.querySelector('.fn-meridiem')
    const timeAlignmentLen = timeAlignment.length
    const movieTotalTimes = 120 * 10
    const totalHour = 18
    const setMath = movieTotalTimes / totalHour
    slider.value = val
    for(let i = 0; i < timeAlignmentLen; i++) {
      if(val > (setMath * i) && val <= (setMath * (i + 1))) {
        addTimeTarget.innerText = timeAlignment[i].time
        addMeridiemTarget.innerText = timeAlignment[i].meridiem
      }
    }
  })
}

export default syncSlider
