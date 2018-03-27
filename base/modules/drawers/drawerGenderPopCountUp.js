'use strict'

// Import D3.js
import d3 from 'd3'

// Drawer Gender Population Count Up Functions.
const drawerGenderPopCountUp = (csv1, i, totalPopArry, getMilitaryTime, getCity, getCityEN, getCityJP) => {
  const csv1Len = csv1.length
  const cityEN = document.querySelector('.fn-app-city-en')
  const cityJP = document.querySelector('.fn-app-city-ja')
  const malePop = document.querySelector('.fn-app-male-population')
  const femalePop = document.querySelector('.fn-app-female-population')
  for(let i = 0; i < csv1Len; i++) {
    if(getMilitaryTime === csv1[i].time && getCity === csv1[i].city) {
      const getGender = csv1[i].gender
      cityEN.innerText = getCityEN
      cityJP.innerText = getCityJP
      if(getGender === '男') {
        totalPopArry.push(Number(csv1[i].population.replace(/\,/g, '')))
        let startPop = Number(csv1[i].population.replace(/\,/g, '') - 100)
        const getPop = Number(csv1[i].population.replace(/\,/g, ''))
        const duration = 10;
        setTimeout(() => {
          setInterval(() => {
            if(startPop <= getPop) {
              malePop.innerText = startPop.toLocaleString();
              startPop++;
            }
          }, duration)
          d3.select('.fn-app-male-graph-inner').transition().duration(1500).style('width', '100%')
        }, 500)
      }
      if(getGender === '女') {
        totalPopArry.push(Number(csv1[i].population.replace(/\,/g, '')))
        let startPop = Number(csv1[i].population.replace(/\,/g, '') - 100)
        const getPop = Number(csv1[i].population.replace(/\,/g, ''))
        const duration = 10;
        setTimeout(() => {
          setInterval(() => {
            if(startPop <= getPop) {
              femalePop.innerText = startPop.toLocaleString();
              startPop++;
            }
          }, duration)
          d3.select('.fn-app-female-graph-inner').transition().duration(1500).style('width', '100%')
        }, 500)
      }
    }
  }
}


export default drawerGenderPopCountUp
