'use strict'

// Import D3.js
import d3 from "d3"

// Heat Graph PC Functions.
const heatGraphPC = (totalPopArry, getID) => {

  const totalPopArryLen = totalPopArry.length
  const getTags = document.getElementById(getID)
  const dummyChild = getTags.firstElementChild
  const addPop = getTags.lastElementChild
  let addTotalPop = 0
  for(let i = 0; i < totalPopArryLen; i++) {
    addTotalPop += totalPopArry[i]
  }
  let startTotalPop = addTotalPop - 100
  const getTotalPop = addTotalPop
  const duration = 10
  totalPopArry.length = 0
  if(dummyChild.innerText != getTotalPop) {
    dummyChild.innerText = getTotalPop
    setTimeout(() => {
      const setBasisCity = document.getElementById('fn-tag-osaka')
      const getBasisPop = setBasisCity.firstElementChild.innerText
      const getCityPopRatio = 160 - 160 * (dummyChild.innerText / getBasisPop * 0.8)
      const getCityPopRatioNaha = 160 - 160 * (dummyChild.innerText / getBasisPop * 2.5)
      d3.select(`#${getID}-sync-polygon`).transition().duration(1500).attr('transform', `translate(0, ${getCityPopRatio})`)
      d3.select('#fn-tag-tokyo-sync-polygon').transition().duration(1500).attr('transform', 'translate(0, 0)')
      d3.select('#fn-tag-naha-sync-polygon').transition().duration(1500).attr('transform', `translate(0, ${getCityPopRatioNaha})`)
    }, 10)
    setInterval(() => {
      if(startTotalPop <= getTotalPop) {
        addPop.innerText = startTotalPop.toLocaleString();
        startTotalPop++
      }
    }, duration)
  }
}

export default heatGraphPC