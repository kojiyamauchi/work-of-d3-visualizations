'use strict'

// Import Json.
import timeAlignment from '../../json/timeAlignment.json'

// Sync Setting Movies <-> Slider.
const syncSliders = () => {
  const movie = document.getElementById('fn-movie')
  const slider = document.querySelector('.fn-slider')
  const addTimeTarget = document.querySelector('.fn-time')
  const addMeridiemTarget = document.querySelector('.fn-meridiem')
  const timeAlignmentLen = timeAlignment.length

  // Sync of Slider for Movie.
  const syncSlider = setCalculation => {
    slider.addEventListener('input', () => {
      const time = slider.value / setCalculation
      movie.currentTime = time
    })
  }

  // Created Sync of Movie for Slider & Time View Functions.
  const moviePlay = (setHourPoints, setCalculation) => {
    movie.addEventListener('timeupdate', () => {
      const val = movie.currentTime * setCalculation
      slider.value = val
      for(let i = 0; i < timeAlignmentLen; i++) {
        if(val > (setHourPoints * i) && val <= (setHourPoints * (i + 1))) {
          addTimeTarget.innerText = timeAlignment[i].time
          addMeridiemTarget.innerText = timeAlignment[i].meridiem
        }
      }
    })
  }

  // Movie Loaded Functions => CallBack Movie Play Functions.
  movie.addEventListener('loadedmetadata', () => {
    const sliderMaxVal = slider.max
    const movieTotalTime = movie.duration
    const setCalculation = Math.round(sliderMaxVal / movieTotalTime)
    const totalHour = 18
    const setHourPoints = movieTotalTime * setCalculation / totalHour
    syncSlider(setCalculation)
    moviePlay(setHourPoints, setCalculation)
  })

}

export default syncSliders