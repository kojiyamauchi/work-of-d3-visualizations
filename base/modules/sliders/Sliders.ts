/*

 Sliders.ts

*/

export default class Sliders {
  // Types.
  movie!: HTMLVideoElement
  slider!: HTMLInputElement | null
  totalHour!: number
  sliderMaxVal: number | null
  setCalculation: number | null
  setHourPoints: number | null

  constructor() {
    this.movie = document.getElementById('fn-movie') as HTMLVideoElement
    this.slider = document.querySelector('.fn-slider')
    this.totalHour = 18
    this.sliderMaxVal = null
    this.setCalculation = null
    this.setHourPoints = null
    this.callMetaData()
  }

  callMetaData() {
    this.movie.addEventListener('loadedmetadata', () => {
      const movieTotalTime = Math.round(this.movie.duration)
      this.sliderMaxVal = Number(this.slider!.max)
      this.setCalculation = Math.round(Number(this.sliderMaxVal) / movieTotalTime)
      this.setHourPoints = (movieTotalTime * this.setCalculation) / this.totalHour
    })
  }

  get propMaxVal() {
    return this.sliderMaxVal
  }

  get propCalc() {
    return this.setCalculation
  }

  get propHourPoints() {
    return this.setHourPoints
  }
}
