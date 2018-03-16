'use strict'

// Import D3.js
import d3 from "d3"

// Import Common Drawer Population Count Up Functions.
import drawerTotalPopCountUp from './drawerTotalPopCountUp'
import drawerGenderPopCountUp from './drawerGenderPopCountUp'
import drawerForeignTourists from './drawerForeignTourists'

// Import Json.
import timeAlignment from '../json/timeAlignment.json'
import cityChecked from '../json/cityChecked.json'

// Visualizations SP Functions.
const visualizationsDrawerSP = () => {

  // Import CSV.
  const importCSV1 = './fv/csv/data.csv'
  const importCSV2 = './fv/csv/foreignTourists.csv'

  // Core Functions.
  d3.csv(importCSV1, (error, csv1) => {
    d3.csv(importCSV2, (error, csv2) => {

      let totalPopArry = []
      const csv1Len = csv1.length
      const movie = document.getElementById('fn-movie')
      const drawer = document.querySelector('.fn-drawer-city')
      const cityBTNSP = document.querySelectorAll('.fn-button-city')
      const cityBTNSPLen = cityBTNSP.length
      const timeAlignmentLen = timeAlignment.length
      const cityCheckedLen = cityChecked.length
      const cityEN = document.querySelector('.fn-app-city-en')
      const cityJA = document.querySelector('.fn-app-city-ja')
      movie.addEventListener('timeupdate', () => {
        for(let i = 0; i < cityBTNSPLen; i++) {
          cityBTNSP[i].onclick = function () {
            const getHour = document.querySelector('.fn-time').innerText
            const getMeridiem = document.querySelector('.fn-meridiem').innerText
            const getID = this.getAttribute('id')
            console.log(getID)
            drawer.classList.add('is-active')
            for(let i = 0; i < timeAlignmentLen; i++) {
              if(getMeridiem === timeAlignment[i].meridiem && getHour === timeAlignment[i].time) {
                const getMilitaryTime = timeAlignment[i].militaryTime
                for(let i = 0; i < cityCheckedLen; i++) {
                  if(getID === cityChecked[i].buttonSP) {
                    const getCity = cityChecked[i].searchWord
                    const getCityEN = cityChecked[i].cityEN
                    const getCityJA = cityChecked[i].cityJA
                    drawerGenderPopCountUp(csv1, i, totalPopArry, getMilitaryTime, getCity, getCityEN, getCityJA)
                    drawerForeignTourists(csv2, i, getMilitaryTime, getCity)
                  }
                }
              }
            }
            drawerTotalPopCountUp(totalPopArry)
          }
        }
      })
    })
  })
}

export default visualizationsDrawerSP