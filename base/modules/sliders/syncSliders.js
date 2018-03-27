'use strict'

// Import Json.
import timeAlignment from '../../../json/timeAlignment.json'

// Import Customize of Slider Functions.
import sliders from './sliders'

// Sync Setting Movies <-> Slider.
const syncSliders = () => {
  const movie = document.getElementById('fn-movie')
  const slider = document.querySelector('.fn-slider')
  const addTimeTarget = document.querySelector('.fn-time')
  const addMeridiemTarget = document.querySelector('.fn-meridiem')
  const timeAlignmentLen = timeAlignment.length
  const addHour = document.querySelector('.fn-hour')
  const addMinute = document.querySelector('.fn-minute')

  // Sync of Slider for Movie.
  const syncSlider = (sliderMaxVal, setCalculation) => {
    slider.addEventListener('input', () => {
      const time = slider.value / setCalculation
      movie.currentTime = time
      sliders(slider, sliderMaxVal)
    })
  }

  // Created Sync of Movie for Slider & Time View Functions.
  const moviePlay = (sliderMaxVal, setHourPoints, setCalculation) => {
    movie.addEventListener('timeupdate', () => {
      const val = movie.currentTime * setCalculation
      slider.value = val
      for(let i = 0; i < timeAlignmentLen; i++) {
        if(val > (setHourPoints * i) && val <= (setHourPoints * (i + 1))) {
          addTimeTarget.innerText = timeAlignment[i].time
          addMeridiemTarget.innerText = timeAlignment[i].meridiem
        }
      }
      const getColonPosition = addTimeTarget.innerText.indexOf(':')
      const getHour = addTimeTarget.innerText.slice(0, getColonPosition)
      const getNumber = Math.floor(movie.currentTime)
      const getMinute = (getNumber % 2) != 0 ? 30 : 0
      addHour.innerText = getHour
      addMinute.innerText = (`0${getMinute}`).slice(-2)
      sliders(slider, sliderMaxVal)
    })
  }

  // Movie Loaded Functions => CallBack Sync Slider & Movie Play Functions.
  movie.addEventListener('loadedmetadata', () => {
    const sliderMaxVal = slider.max
    const movieTotalTime = Math.round(movie.duration)
    const setCalculation = Math.round(sliderMaxVal / movieTotalTime)
    const totalHour = 18
    const setHourPoints = movieTotalTime * setCalculation / totalHour
    syncSlider(sliderMaxVal, setCalculation)
    moviePlay(sliderMaxVal, setHourPoints, setCalculation)
  })

}

export default syncSliders
