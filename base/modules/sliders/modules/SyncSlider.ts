/*

 SyncSlider.ts

*/

// Import Sliders.ts
import Sliders from '@/base/modules/sliders/Sliders'

export default class SyncSlider extends Sliders {
  // Types.
  // None.

  constructor() {
    super()
    // None.
  }

  callSyncSlider() {
    this.slider!.addEventListener('input', () => {
      const time = Number(this.slider!.value) / this.propCalc!
      this.movie.currentTime = time
    })
  }
}
