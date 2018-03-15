'use strict'

// Import D3.js
import d3 from "d3"

// Drawer Total Population Count Up Functions.
const drawerGenderPopCountUp = (getGender, csv, i, totalPopArry) => {
  const malePop = document.querySelector('.fn-app-male-population')
  const femalePop = document.querySelector('.fn-app-female-population')
  if(getGender === '男') {
    totalPopArry.push(Number(csv[i].population.replace(/\,/g, '')))
    let startPop = Number(csv[i].population.replace(/\,/g, '') - 150)
    const getPop = Number(csv[i].population.replace(/\,/g, ''))
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
    totalPopArry.push(Number(csv[i].population.replace(/\,/g, '')))
    let startPop = Number(csv[i].population.replace(/\,/g, '') - 150)
    const getPop = Number(csv[i].population.replace(/\,/g, ''))
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

export default drawerGenderPopCountUp