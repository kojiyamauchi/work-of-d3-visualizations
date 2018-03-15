'use strict'

// Slider Clicked Function.
const sliderClicked = () => {
  const movie = document.getElementById('fn-movie')
  const slider = document.querySelector('.fn-slider')
  const playButtonSP = document.querySelector('.fn-button-play')
  slider.addEventListener('click', () => {
    if(movie.paused === true) {
      movie.play()
      slider.classList.remove('is-stop')
      playButtonSP.classList.remove('is-stop')
    } else {
      movie.pause()
      slider.classList.add('is-stop')
      playButtonSP.classList.add('is-stop')
    }
  })
  playButtonSP.addEventListener('click', () => {
    if(movie.paused === true) {
      movie.play()
      playButtonSP.classList.remove('is-stop')
      slider.classList.remove('is-stop')
    } else {
      movie.pause()
      playButtonSP.classList.add('is-stop')
      slider.classList.add('is-stop')
    }
  })
}

export default sliderClicked
