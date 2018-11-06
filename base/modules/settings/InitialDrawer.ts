/*

 InitialDrawer.ts

*/

// Import InterFace.
import { CityCheckedTypes } from '@/types/interface'

export default class DrawerClosed {
  // Types.
  closeBTN!: HTMLInputElement | null
  movie!: HTMLVideoElement
  drawer!: HTMLElement | null
  totalPop!: HTMLElement | null
  malePop!: HTMLElement | null
  femalePop!: HTMLElement | null
  foreignTotalPop!: HTMLElement | null
  maleWrap!: HTMLElement | null
  femaleWrap!: HTMLElement | null
  maleGraph!: HTMLElement | null
  femaleGraph!: HTMLElement | null
  drawerHeatGraphWrap!: HTMLElement | null
  countriesPop!: NodeListOf<HTMLElement>
  countriesGraphWrap!: NodeListOf<HTMLElement>
  countriesGraph!: NodeListOf<HTMLElement>
  drawerCityBG!: HTMLElement | null

  constructor() {
    this.closeBTN = document.querySelector('.fn-button-back-to-map')
    this.movie = document.getElementById('fn-movie') as HTMLVideoElement
    this.drawer = document.querySelector('.fn-drawer-city')
    this.totalPop = document.querySelector('.fn-app-population')
    this.malePop = document.querySelector('.fn-app-male-population')
    this.femalePop = document.querySelector('.fn-app-female-population')
    this.foreignTotalPop = document.querySelector('.fn-app-visited-population')
    this.maleWrap = document.querySelector('.fn-gender-male-wrapper')
    this.femaleWrap = document.querySelector('.fn-gender-female-wrapper')
    this.maleGraph = document.querySelector('.fn-app-female-graph-inner')
    this.femaleGraph = document.querySelector('.fn-app-male-graph-inner')
    this.drawerHeatGraphWrap = document.querySelector('.fn-add-heat-graph')
    this.countriesPop = document.querySelectorAll('.fn-countries-population')
    this.countriesGraphWrap = document.querySelectorAll('.fn-graph-countries-population')
    this.countriesGraph = document.querySelectorAll('.fn-graph-countries-population-inner')
    this.drawerCityBG = document.querySelector('.fn-city-map')
  }
  callCore(propDataBaseCityChecked: CityCheckedTypes[]) {
    this.closeBTN!.addEventListener('click', () => {
      this.movie.play()
      this.drawer!.classList.remove('is-active')
      this.totalPop!.textContent = `ーーーーー`
      this.malePop!.textContent = `ーーーーー`
      this.femalePop!.textContent = `ーーーーー`
      this.foreignTotalPop!.textContent = `ーーーー`
      this.maleWrap!.removeAttribute('style')
      this.femaleWrap!.removeAttribute('style')
      this.maleGraph!.removeAttribute('style')
      this.femaleGraph!.removeAttribute('style')
      this.drawerHeatGraphWrap!.textContent = null
      Array.from(this.countriesPop).map((info, index) => {
        info.textContent = `ーーー`
        this.countriesGraphWrap[index].removeAttribute('style')
        this.countriesGraph[index].removeAttribute('style')
      })
      propDataBaseCityChecked.map(info => {
        this.drawerCityBG!.classList.remove(info.cityLowerEN)
      })
      this.closeBTN!.disabled = true
    })
  }
}
