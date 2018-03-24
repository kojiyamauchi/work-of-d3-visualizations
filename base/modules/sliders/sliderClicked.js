'use strict'

// Slider Clicked Function.
const sliderClicked = () => {
  const movie = document.getElementById('fn-movie')
  const playButtonSP = document.querySelector('.fn-button-play')
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