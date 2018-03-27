'use strict'

// Import D3.js
import d3 from 'd3'

// Import Json.
import countryName from '../../../json/countryName.json'

// Drawer Foreign Tourists Functions.
const drawerForeignTourists = (csv2, i, totalForeignArry, getMilitaryTime, getCity) => {
  const getPoplutaionArry = []
  const getCountriesArry = []
  const getCountriesFlagArry = []
  const csv2Len = csv2.length
  const countryNameLen = countryName.length
  const addCountries = document.querySelectorAll('.fn-countries-name')
  const addCountriesLen = addCountries.length
  const countriesPop = document.querySelectorAll('.fn-countries-population')
  const countriesFlag = document.querySelectorAll('.fn-icon-flag')
  const countriesGraphWrap = document.querySelectorAll('.fn-graph-countries-population')
  const countriesGraph = document.querySelectorAll('.fn-graph-countries-population-inner')
  const closeBTN = document.querySelector('.fn-button-back-to-map')
  const graphCallBackCore = (transition, callback) => {
    let index = 0
    transition
      .each(() => {
        ++index
      })
      .each('end', () => {
        if(!--index) callback.apply(this, arguments)
      })
  }

  for(let i = 0; i < csv2Len; i++) {
    if(getMilitaryTime === csv2[i].time && getCity === csv2[i].city) {
      totalForeignArry.push(Number(csv2[i].population))
      getPoplutaionArry.push(Number(csv2[i].population))
      const getCountries = csv2[i].country
      for(let i = 0; i < countryNameLen; i++) {
        if(getCountries === countryName[i].countryNameJP) {
          getCountriesArry.push(countryName[i].countryNameEN)
          getCountriesFlagArry.push(countryName[i].flagPath)
          for(let i = 0; i < addCountriesLen; i++) {
            const getGraphWidth = getPoplutaionArry[i] / getPoplutaionArry[0] * 100
            let startPop = getPoplutaionArry[i] - 100 >= 0 ? getPoplutaionArry[i] - 100 : 0
            const getPop = getPoplutaionArry[i]
            const duration = 10;
            addCountries[i].innerText = getCountriesArry[i]
            countriesFlag[i].setAttribute('src', `images/icon_${getCountriesFlagArry[i]}.svg`)
            countriesGraphWrap[i].style.width = `${getGraphWidth}%`
            setTimeout(() => {
              setInterval(() => {
                if(startPop <= getPop) {
                  countriesPop[i].innerText = startPop.toLocaleString();
                  startPop++;
                }
              }, duration)
              d3.select(countriesGraph[i]).transition().duration(1500).style('width', '100%').call(graphCallBackCore, () => {
                closeBTN.disabled = false
              })
            }, 500)
          }
        }
      }
    }
  }
}

export default drawerForeignTourists
