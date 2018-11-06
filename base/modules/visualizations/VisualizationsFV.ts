/*

 VisualizationsFV.ts

*/

// Import D3 Selection & Transition.
import * as d3 from 'd3-selection'
import 'd3-transition'

// Import InterFace.
import { DataBaseJapaneseTypes } from '@/types/interface'

export default class VisualizationsFV {
  // Types.
  totalPopArry: number[]
  changeFlag: string | null
  checkMeridiem: HTMLElement | null
  checkHour: HTMLElement | null
  deviceFlag: HTMLElement | null
  movie: HTMLVideoElement
  cityBTNPC: NodeListOf<HTMLElement>

  constructor() {
    this.totalPopArry = []
    this.changeFlag = ''
    this.checkMeridiem = document.querySelector('.fn-meridiem')
    this.checkHour = document.querySelector('.fn-time')
    this.deviceFlag = document.querySelector('.first-view')
    this.movie = document.getElementById('fn-movie') as HTMLVideoElement
    this.cityBTNPC = document.querySelectorAll('.fn-tag')
  }

  callVisualizations(propDataBaseJapanese: DataBaseJapaneseTypes[]) {
    this.movie.addEventListener('timeupdate', () => {
      const toCheck = document.querySelector('.fn-hour')!.textContent

      if (this.changeFlag !== toCheck) {
        const getMeridiem = this.checkMeridiem!.textContent
        const getHour = this.checkHour!.textContent

        Array.from(this.cityBTNPC).map(cityInfo => {
          const getID = cityInfo.getAttribute('id')

          propDataBaseJapanese.map((dataBaseInfo: DataBaseJapaneseTypes) => {
            if (getMeridiem === dataBaseInfo.meridiem && getHour === dataBaseInfo.time && getID === dataBaseInfo.buttonPC) {
              this.totalPopArry.push(Number(dataBaseInfo.population.replace(/\,/g, '')))
            }
          })

          // Sum All Population.
          const addTotalPop = this.totalPopArry.reduce((prev, current) => (prev += current), 0)

          let startTotalPop = addTotalPop - 40
          const getTotalPop = addTotalPop
          const duration = 1
          this.totalPopArry.length = 0

          const getTags = document.getElementById(getID!)
          const dummyChild = getTags!.firstElementChild as HTMLElement
          const addPop = getTags!.lastElementChild as HTMLElement

          if (dummyChild!.textContent !== String(getTotalPop)) {
            dummyChild!.textContent = String(getTotalPop)

            // Display Population on Tags.
            setInterval(() => {
              if (startTotalPop <= getTotalPop) {
                addPop!.textContent = startTotalPop.toLocaleString()
                startTotalPop++
              }
            }, duration)

            // Display Triangle Graph ( D3.js ).
            setTimeout(() => {
              const flagSP = this.deviceFlag!.classList.contains('sp')
              const flagPCTB = this.deviceFlag!.classList.contains('pctb')
              const addSizePoint = Number(flagSP ? `62` : flagPCTB ? `107` : `162`)
              const addBasisRatio = Number(flagSP ? `1` : `0.8`)
              const setBasisCity = document.getElementById('fn-tag-osaka')!.firstElementChild as HTMLElement
              const getBasisPop = Number(setBasisCity!.textContent)
              const getCityPopRatio = addSizePoint - addSizePoint * ((Number(dummyChild.textContent) / getBasisPop) * addBasisRatio)
              const getCityPopRatioNaha = addSizePoint - addSizePoint * ((Number(dummyChild.textContent) / getBasisPop) * 2.5)
              d3.select(`#${getID}-sync-polygon`)
                .transition()
                .duration(750)
                .attr('transform', `translate(0, ${getCityPopRatio})`)
              d3.select('#fn-tag-tokyo-sync-polygon')
                .transition()
                .duration(750)
                .attr('transform', 'translate(0, 0)')
              d3.select('#fn-tag-naha-sync-polygon')
                .transition()
                .duration(750)
                .attr('transform', `translate(0, ${getCityPopRatioNaha})`)
            }, 10)
          }
        })

        this.changeFlag = toCheck
      }
    })
  }
}
