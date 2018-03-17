'use strict'

// Customize of Slider.
const sliders = () => {
  const movie = document.getElementById('fn-movie')
  const target = document.querySelector('.fn-range-active')
  const range = document.querySelector('.fn-slider')
  const rangeFullVal = range.max
  const rangePoint = document.querySelectorAll('.fn-range-point')
  const pointLen = rangePoint.length
  const pointVal = rangeFullVal / (pointLen - 1)
  const sliderTime = document.querySelectorAll('.fn-slider-time')
  const coreFunc = range => {
    return event => {
      if(range.value < rangeFullVal / 2) {
        target.style.width = `${(range.value / rangeFullVal * 100) + 1}%`
      }
      if(range.value >= rangeFullVal / 2) {
        target.style.width = `${(range.value / rangeFullVal * 100)}%`
      }
      for(let i = 0; i < pointLen; i++) {
        if(range.value >= pointVal * i) {
          rangePoint[i].classList.add('is-active')
          sliderTime[i].classList.add('is-active')
        } else {
          rangePoint[i].classList.remove('is-active')
          sliderTime[i].classList.remove('is-active')
        }
      }
    }
  }
  movie.addEventListener('timeupdate', coreFunc(range), false)
  range.addEventListener('input', coreFunc(range), false)
}

export default sliders