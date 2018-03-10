'use strict'

// Import D3.js
import d3 from "d3"

// Import Json.
import timeAlignment from '../../json/timeAlignment.json'
import cityChecked from '../../json/cityChecked.json'

// Visualizations SP Functions.
const visualizationsSP = () => {

  // Import CSV.
  const importCSV = './csv/data.csv'

  // Core Functions.
  d3.csv(importCSV, (error, csv) => {
    const csvLen = csv.length
    const movie = document.getElementById('fn-movie')
    const drawer = document.querySelector('.fn-drawer-city')
    const cityBTNSP = document.querySelectorAll('.fn-button-city')
    const cityBTNSPLen = cityBTNSP.length
    const timeAlignmentLen = timeAlignment.length
    const cityCheckedLen = cityChecked.length
    movie.addEventListener('timeupdate', () => {
      for(let i = 0; i < cityBTNSPLen; i++) {
        cityBTNSP[i].onclick = function () {
          const getHour = document.querySelector('.fn-time').innerText
          const getMeridiem = document.querySelector('.fn-meridiem').innerText
          const getID = this.getAttribute('id')
          drawer.classList.add('is-active')
          for(let i = 0; i < timeAlignmentLen; i++) {
            if(getMeridiem === timeAlignment[i].meridiem && getHour === timeAlignment[i].time) {
              const getMilitaryTime = timeAlignment[i].militaryTime
              for(let i = 0; i < cityCheckedLen; i++) {
                if(getID === cityChecked[i].buttonSP) {
                  const getCity = cityChecked[i].searchWord
                  for(let i = 0; i < csvLen; i++) {
                    if(getMilitaryTime === csv[i].time && getCity === csv[i].city) {
                      console.log(`時間は => ${csv[i].time}`)
                      console.log(`都市は => ${csv[i].city}`)
                      const getGender = csv[i].gender
                      if(getGender === '男') {
                        console.log(`男は => ${csv[i].population}`)
                      }
                      if(getGender === '女') {
                        console.log(`女は => ${csv[i].population}`)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    })
  })
}

export default visualizationsSP