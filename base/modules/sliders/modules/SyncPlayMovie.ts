/*

 SyncPlayMovie.ts

*/

// Import Sliders.ts
import Sliders from '@/base/modules/sliders/Sliders'

// Import InterFace.
import { TimeAlignmentTypes } from '@/types/interface'

export default class SyncPlayMovie extends Sliders {
  // Types.
  addTimeTarget!: HTMLElement | null
  addMeridiemTarget!: HTMLElement | null
  addHour!: HTMLElement | null
  addMinute!: HTMLElement | null

  constructor() {
    super()
    this.addTimeTarget = document.querySelector('.fn-time')
    this.addMeridiemTarget = document.querySelector('.fn-meridiem')
    this.addHour = document.querySelector('.fn-hour')
    this.addMinute = document.querySelector('.fn-minute')
  }

  callSyncMovie(timeAlignment: TimeAlignmentTypes[]) {
    this.movie.addEventListener('timeupdate', () => {
      const val = this.movie.currentTime * this.propCalc!
      this.slider!.value = String(val)
      timeAlignment.map((info: TimeAlignmentTypes, index: number) => {
        if (val > this.propHourPoints! * index && val <= this.propHourPoints! * (index + 1)) {
          this.addTimeTarget!.textContent = info.time
          this.addMeridiemTarget!.textContent = info.meridiem
        }
      })
      const getColonPosition = this.addTimeTarget!.textContent!.indexOf(':')
      const getHour = this.addTimeTarget!.textContent!.slice(0, getColonPosition)
      const getNumber = Math.floor(this.movie.currentTime)
      const getMinute = getNumber % 2 !== 0 ? 30 : 0
      this.addHour!.textContent = getHour
      this.addMinute!.textContent = `0${getMinute}`.slice(-2)
    })
  }
}
