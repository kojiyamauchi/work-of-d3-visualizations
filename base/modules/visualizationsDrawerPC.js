'use strict'

// Import D3.js
import d3 from "d3"

// Import Common Drawer Population Count Up Functions.
import drawerTotalPopCountUp from './drawerTotalPopCountUp'
import drawerGenderPopCountUp from './drawerGenderPopCountUp'

// Import Json.
import timeAlignment from '../json/timeAlignment.json'
import cityChecked from '../json/cityChecked.json'

// Visualizations PC Functions.
const visualizationsDrawerPC = () => {

  // Import CSV.
  const importCSV = './fv/csv/data.csv'

  // Core Functions.
  d3.csv(importCSV, (error, csv) => {

    let totalPopArry = []
    const csvLen = csv.length
    const movie = document.getElementById('fn-movie')
    const drawer = document.querySelector('.fn-drawer-city')
    const cityBTNPC = document.querySelectorAll('.fn-tag')
    const cityBTNPCLen = cityBTNPC.length
    const timeAlignmentLen = timeAlignment.length
    const cityCheckedLen = cityChecked.length
    const cityEN = document.querySelector('.fn-app-city-en')
    const cityJA = document.querySelector('.fn-app-city-ja')
    movie.addEventListener('timeupdate', () => {
      for(let i = 0; i < cityBTNPCLen; i++) {
        cityBTNPC[i].onclick = function () {
          const getHour = document.querySelector('.fn-time').innerText
          const getMeridiem = document.querySelector('.fn-meridiem').innerText
          const getID = this.getAttribute('id')
          drawer.classList.add('is-active')
          for(let i = 0; i < timeAlignmentLen; i++) {
            if(getMeridiem === timeAlignment[i].meridiem && getHour === timeAlignment[i].time) {
              const getMilitaryTime = timeAlignment[i].militaryTime
              for(let i = 0; i < cityCheckedLen; i++) {
                if(getID === cityChecked[i].buttonPC) {
                  const getCity = cityChecked[i].searchWord
                  const getCityEN = cityChecked[i].cityEN
                  const getCityJA = cityChecked[i].cityJA
                  for(let i = 0; i < csvLen; i++) {
                    if(getMilitaryTime === csv[i].time && getCity === csv[i].city) {
                      const getGender = csv[i].gender
                      cityEN.innerText = getCityEN
                      cityJA.innerText = getCityJA
                      drawerGenderPopCountUp(getGender, csv, i, totalPopArry)
                    }
                  }
                }
              }
            }
          }
          drawerTotalPopCountUp(totalPopArry)
        }
      }
    })
  })
}


export default visualizationsDrawerPC