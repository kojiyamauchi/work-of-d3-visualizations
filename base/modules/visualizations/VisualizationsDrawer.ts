/*

 VisualizationsDrawer.ts

*/

// Import D3 Selection & Transition.
import * as d3 from 'd3-selection'

// Import InterFace.
import { DataBaseJapaneseTypes, DataBaseTouristsTypes } from '@/types/interface'

export default class VisualizationsDrawer {
  // Types.
  totalPopArry: number[]
  totalForeignArry: number[]
  countriesArry: string[]
  countriesFlagArry: string[]
  getCityLower: string
  cityBTNPC: NodeListOf<HTMLElement>
  cityBTNSP: NodeListOf<HTMLElement>
  movie: HTMLVideoElement
  drawer: HTMLElement | null
  drawerCityBG: HTMLElement | null
  checkHour: HTMLElement | null
  checkMeridiem: HTMLElement | null
  cityEN: HTMLElement | null
  cityJP: HTMLElement | null
  malePop: HTMLElement | null
  femalePop: HTMLElement | null
  totalPop: HTMLElement | null
  maleGraph: HTMLElement | null
  femaleGraph: HTMLElement | null
  maleWrap: HTMLElement | null
  femaleWrap: HTMLElement | null
  addCountries: NodeListOf<HTMLElement>
  countriesPop: NodeListOf<HTMLElement>
  countriesFlag: NodeListOf<HTMLElement>
  countriesGraphWrap: NodeListOf<HTMLElement>
  countriesGraph: NodeListOf<HTMLElement>
  foreignTotalPop: HTMLElement | null
  triangleGraph: HTMLElement | null
  closeBTN: HTMLInputElement | null
  graphCallBackCore: (transition: any, callback: any) => void

  constructor() {
    this.totalPopArry = []
    this.totalForeignArry = []
    this.countriesArry = []
    this.countriesFlagArry = []
    this.getCityLower = ''
    this.cityBTNPC = document.querySelectorAll('.fn-tag')
    this.cityBTNSP = document.querySelectorAll('.fn-button-city')
    this.movie = document.getElementById('fn-movie') as HTMLVideoElement
    this.drawer = document.querySelector('.fn-drawer-city')
    this.drawerCityBG = document.querySelector('.fn-city-map')
    this.checkMeridiem = document.querySelector('.fn-meridiem')
    this.checkHour = document.querySelector('.fn-time')
    this.cityEN = document.querySelector('.fn-app-city-en')
    this.cityJP = document.querySelector('.fn-app-city-ja')
    this.malePop = document.querySelector('.fn-app-male-population')
    this.femalePop = document.querySelector('.fn-app-female-population')
    this.totalPop = document.querySelector('.fn-app-population')
    this.maleGraph = document.querySelector('.fn-app-male-graph-inner')
    this.femaleGraph = document.querySelector('.fn-app-female-graph-inner')
    this.maleWrap = document.querySelector('.fn-gender-male-wrapper')
    this.femaleWrap = document.querySelector('.fn-gender-female-wrapper')
    this.addCountries = document.querySelectorAll('.fn-countries-name')
    this.countriesPop = document.querySelectorAll('.fn-countries-population')
    this.countriesFlag = document.querySelectorAll('.fn-icon-flag')
    this.countriesGraphWrap = document.querySelectorAll('.fn-graph-countries-population')
    this.countriesGraph = document.querySelectorAll('.fn-graph-countries-population-inner')
    this.foreignTotalPop = document.querySelector('.fn-app-visited-population')
    this.triangleGraph = document.querySelector('.fn-add-heat-graph')
    this.closeBTN = document.querySelector('.fn-button-back-to-map')
    this.graphCallBackCore = (transition, callback) => {
      let index = 0
      transition
        .on('start', () => {
          ++index
        })
        .on('end', () => {
          if (!--index) {
            callback.apply(this)
          }
        })
    }
  }

  genderPopCountUp(dataBaseInfo: DataBaseJapaneseTypes) {
    // Core Functions.
    const coreFunction = (setPop: HTMLElement | null, setGraph: HTMLElement | null) => {
      this.totalPopArry.push(Number(dataBaseInfo.population.replace(/\,/g, '')))
      const getPop = Number(dataBaseInfo.population.replace(/\,/g, ''))
      let startPop = getPop - 30
      const duration = 50
      setTimeout(() => {
        setInterval(() => {
          if (startPop <= getPop) {
            setPop!.textContent = startPop.toLocaleString()
            startPop++
          }
        }, duration)
        d3.select(setGraph)
          .transition()
          .duration(1500)
          .style('width', '100%')
      }, 500)
    }
    // Branches.
    if (dataBaseInfo.gender === '男') {
      const setPop = this.malePop
      const setGraph = this.maleGraph
      coreFunction(setPop, setGraph)
    }
    if (dataBaseInfo.gender === '女') {
      const setPop = this.femalePop
      const setGraph = this.femaleGraph
      coreFunction(setPop, setGraph)
    }
  }

  totalPopCountUp() {
    const addTotalPop = this.totalPopArry.reduce((prev, current) => (prev += current), 0)
    let startTotalPop = addTotalPop - 30
    const getTotalPop = addTotalPop
    const getMalePop = this.totalPopArry[0]
    const getFemalePop = this.totalPopArry[1]
    const getMaleWidth = (getMalePop / getTotalPop) * 100
    const getFemaleWidth = (getFemalePop / getTotalPop) * 100
    const duration = 50
    this.maleWrap!.style.width = `${getMaleWidth}%`
    this.femaleWrap!.style.width = `${getFemaleWidth}%`
    this.totalPopArry.length = 0
    setTimeout(() => {
      setInterval(() => {
        if (startTotalPop <= getTotalPop) {
          this.totalPop!.textContent = startTotalPop.toLocaleString()
          startTotalPop++
        }
      }, duration)
    }, 500)
  }

  foreignTourists() {
    Array.from(this.addCountries).map((countriesInfo, index) => {
      const getGraphWidth = (this.totalForeignArry[index] / this.totalForeignArry[0]) * 100
      let startPop = this.totalForeignArry[index] - 30 >= 0 ? this.totalForeignArry[index] - 30 : 0
      const getPop = this.totalForeignArry[index]
      const duration = 50
      countriesInfo.textContent = this.countriesArry[index]
      this.countriesFlag[index].setAttribute('src', `images/icon_${this.countriesFlagArry[index]}.svg`)
      this.countriesGraphWrap[index].style.width = `${getGraphWidth}%`
      setTimeout(() => {
        setInterval(() => {
          if (startPop <= getPop) {
            this.countriesPop[index].textContent = startPop.toLocaleString()
            startPop++
          }
        }, duration)
        d3.select(this.countriesGraph[index])
          .transition()
          .duration(1500)
          .style('width', '100%')
          .call(this.graphCallBackCore, () => {
            this.closeBTN!.disabled = false
          })
      }, 500)
    })
  }

  foreignTotalPopCountUp() {
    const addTotalPop = this.totalForeignArry.reduce((prev, current) => (prev += current), 0)
    let startTotalPop = addTotalPop - 30
    const getTotalPop = addTotalPop
    const duration = 50
    this.totalForeignArry.length = 0
    setTimeout(() => {
      setInterval(() => {
        if (startTotalPop <= getTotalPop) {
          this.foreignTotalPop!.textContent = startTotalPop.toLocaleString()
          startTotalPop++
        }
      }, duration)
    }, 500)
  }

  drawerTriangleGraph(getCityLower: string) {
    const getTriangleGraph = document.querySelector(`.fn-triangle-graph-${getCityLower}`)
    const cloneTriangleGraph = getTriangleGraph!.cloneNode(true) as HTMLElement
    this.triangleGraph!.appendChild(cloneTriangleGraph)
  }

  callDrawerSP(propDataBaseJapanese: DataBaseJapaneseTypes[], propDataBaseTourists: DataBaseTouristsTypes[]) {
    Array.from(this.cityBTNSP).map(info => {
      info.addEventListener('click', () => {
        const getMeridiem = this.checkMeridiem!.textContent
        const getHour = this.checkHour!.textContent
        const getID = info.getAttribute('id')
        this.movie.pause()
        this.drawer!.classList.add('is-active')

        propDataBaseJapanese.map((dataBaseInfo: DataBaseJapaneseTypes) => {
          if (getMeridiem === dataBaseInfo.meridiem && getHour === dataBaseInfo.time && getID === dataBaseInfo.buttonSP) {
            this.getCityLower = dataBaseInfo.cityLowerEN
            this.cityEN!.textContent = dataBaseInfo.cityEN
            this.cityJP!.textContent = dataBaseInfo.cityJP
            this.drawerCityBG!.classList.add(this.getCityLower)
            this.genderPopCountUp(dataBaseInfo)
          }
        })

        propDataBaseTourists.map((dataBaseInfo: DataBaseTouristsTypes) => {
          if (getMeridiem === dataBaseInfo.meridiem && getHour === dataBaseInfo.time && getID === dataBaseInfo.buttonSP) {
            this.totalForeignArry.push(Number(dataBaseInfo.population))
            this.countriesArry.push(dataBaseInfo.countryNameEN)
            this.countriesFlagArry.push(dataBaseInfo.flagPath)
          }
        })

        this.totalPopCountUp()
        this.foreignTourists()
        this.foreignTotalPopCountUp()
        this.drawerTriangleGraph(this.getCityLower)
      })
    })
  }

  callDrawerPC(propDataBaseJapanese: DataBaseJapaneseTypes[], propDataBaseTourists: DataBaseTouristsTypes[]) {
    Array.from(this.cityBTNPC).map(info => {
      info.addEventListener('click', () => {
        const getMeridiem = this.checkMeridiem!.textContent
        const getHour = this.checkHour!.textContent
        const getID = info.getAttribute('id')
        this.movie.pause()
        this.drawer!.classList.add('is-active')

        propDataBaseJapanese.map((dataBaseInfo: DataBaseJapaneseTypes) => {
          if (getMeridiem === dataBaseInfo.meridiem && getHour === dataBaseInfo.time && getID === dataBaseInfo.buttonPC) {
            this.getCityLower = dataBaseInfo.cityLowerEN
            this.cityEN!.textContent = dataBaseInfo.cityEN
            this.cityJP!.textContent = dataBaseInfo.cityJP
            this.drawerCityBG!.classList.add(this.getCityLower)
            this.genderPopCountUp(dataBaseInfo)
          }
        })

        propDataBaseTourists.map((dataBaseInfo: DataBaseTouristsTypes) => {
          if (getMeridiem === dataBaseInfo.meridiem && getHour === dataBaseInfo.time && getID === dataBaseInfo.buttonPC) {
            this.totalForeignArry.push(Number(dataBaseInfo.population))
            this.countriesArry.push(dataBaseInfo.countryNameEN)
            this.countriesFlagArry.push(dataBaseInfo.flagPath)
          }
        })

        this.totalPopCountUp()
        this.foreignTourists()
        this.foreignTotalPopCountUp()
        this.drawerTriangleGraph(this.getCityLower)
      })
    })
  }
}
