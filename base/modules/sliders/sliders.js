'use strict'

// Customize of Slider.
const sliders = (slider, sliderMaxVal) => {
  const target = document.querySelector('.fn-range-active')
  const rangePoint = document.querySelectorAll('.fn-range-point')
  const pointLen = rangePoint.length
  const pointVal = sliderMaxVal / (pointLen - 1)
  const sliderTime = document.querySelectorAll('.fn-slider-time')
  if(slider.value < sliderMaxVal / 2) {
    target.style.width = `${(slider.value / sliderMaxVal * 100) + 1}%`
  }
  if(slider.value >= sliderMaxVal / 2) {
    target.style.width = `${(slider.value / sliderMaxVal * 100)}%`
  }
  for(let i = 0; i < pointLen; i++) {
    if(slider.value >= pointVal * i) {
      rangePoint[i].classList.add('is-active')
      sliderTime[i].classList.add('is-active')
    } else {
      rangePoint[i].classList.remove('is-active')
      sliderTime[i].classList.remove('is-active')
    }
  }
}

export default sliders