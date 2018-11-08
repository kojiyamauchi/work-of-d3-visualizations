/*

 SliderStyles.ts

*/

// Import Sliders.ts
import SyncPlayMovie from '@/base/modules/sliders/modules/SyncPlayMovie'

export default class SyncSliderStyles extends SyncPlayMovie {
  // Types.
  target: HTMLElement | null
  rangePoint: NodeListOf<HTMLElement>
  pointLen: number
  sliderTime: NodeListOf<HTMLElement>

  constructor() {
    super()
    this.target = document.querySelector('.fn-range-active')
    this.rangePoint = document.querySelectorAll('.fn-range-point')
    this.pointLen = this.rangePoint.length
    this.sliderTime = document.querySelectorAll('.fn-slider-time')
  }

  callSyncStyles() {
    this.movie.addEventListener('timeupdate', () => {
      const pointVal = this.propMaxVal! / (this.pointLen - 1)
      if (Number(this.slider!.value) < this.propMaxVal! / 2) {
        ;(this.target as HTMLElement).style.width = `${(Number(this.slider!.value) / this.propMaxVal!) * 100 + 1}%`
      }
      if (Number(this.slider!.value) >= this.propMaxVal! / 2) {
        ;(this.target as HTMLElement).style.width = `${(Number(this.slider!.value) / this.propMaxVal!) * 100}%`
      }
      Array.from(this.rangePoint).map((info, index) => {
        if (Number(this.slider!.value) >= pointVal * index) {
          info.classList.add('is-active')
          this.sliderTime[index].classList.add('is-active')
        } else {
          info.classList.remove('is-active')
          this.sliderTime[index].classList.remove('is-active')
        }
      })
    })
  }
}
