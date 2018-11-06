/*

 SliderClicked.ts

*/

// Import Sliders.ts
import Sliders from '@/base/modules/sliders/Sliders'

export default class SliderClicked extends Sliders {
  // Types.
  playButtonSP: HTMLElement | null

  constructor() {
    super()
    this.playButtonSP = document.querySelector('.fn-button-play')
  }

  callSliderClicked() {
    this.playButtonSP!.addEventListener('click', () => {
      if (this.movie.paused === true) {
        this.playButtonSP!.classList.remove('is-stop')
        this.slider!.classList.remove('is-stop')
        this.movie.play()
      } else {
        this.playButtonSP!.classList.add('is-stop')
        this.slider!.classList.add('is-stop')
        this.movie.pause()
      }
    })
  }
}
