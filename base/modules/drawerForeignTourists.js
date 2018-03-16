'use strict'

// Import D3.js
import d3 from "d3"

// Drawer Total Foreign Tourists Functions.
const drawerForeignTourists = (csv2, i, getMilitaryTime, getCity) => {
  const csv2Len = csv2.length
  const addCountries = document.querySelectorAll('.fn-countries-name')
  const addCountriesLen = addCountries.length
  const getCountryArry = []
  const getPoplutaionArry = []
  const countriesPop = document.querySelectorAll('.fn-countries-population')
  const countriesGraphWrap = document.querySelectorAll('.fn-graph-countries-population')
  const countriesGraph = document.querySelectorAll('.fn-graph-countries-population-inner')

  for(let i = 0; i < csv2Len; i++) {
    if(getMilitaryTime === csv2[i].time && getCity === csv2[i].city) {
      getCountryArry.push(csv2[i].country)
      getPoplutaionArry.push(csv2[i].population)
      for(let i = 0; i < addCountriesLen; i++) {
        const getGraphWidth = getPoplutaionArry[i] / getPoplutaionArry[0] * 100
        let startPop = Number(getPoplutaionArry[i] - 150)
        const getPop = Number(getPoplutaionArry[i])
        const duration = 10;
        addCountries[i].innerText = getCountryArry[i]
        countriesGraphWrap[i].style.width = `${getGraphWidth}%`
        setTimeout(() => {
          setInterval(() => {
            if(startPop <= getPop) {
              countriesPop[i].innerText = startPop.toLocaleString();
              startPop++;
            }
          }, duration)
          d3.select(countriesGraph[i]).transition().duration(1500).style('width', '100%')
        }, 500)
      }
    }
  }
}

export default drawerForeignTourists