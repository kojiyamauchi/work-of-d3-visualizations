'use strict'

// Import D3.js
import d3 from "d3"

// Heat Graph SP Functions.
const heatGraphSP = (totalPopArry, getID) => {

  const getTags = document.getElementById(getID)
  const dummyChild = getTags.firstElementChild
  const totalPopArryLen = totalPopArry.length
  const addPop = getTags.lastElementChild
  let addTotalPop = 0
  for(let i = 0; i < totalPopArryLen; i++) {
    addTotalPop += totalPopArry[i]
  }
  let startTotalPop = addTotalPop - 150
  const getTotalPop = addTotalPop
  const duration = 5
  totalPopArry.length = 0
  if(dummyChild.innerText != getTotalPop) {
    dummyChild.innerText = getTotalPop
    setTimeout(() => {
      const setBasisCity = document.getElementById('fn-tag-osaka')
      const getBasisPop = setBasisCity.firstElementChild.innerText
      const getCityPopRatio = 62 - 62 * (dummyChild.innerText / getBasisPop)
      const getCityPopRatioNaha = 62 - 62 * (dummyChild.innerText / getBasisPop * 2.5)
      d3.select(`#${getID}-sync-polygon`).transition().duration(1500).attr('transform', `translate(0, ${getCityPopRatio})`)
      d3.select('#fn-tag-tokyo-sync-polygon').transition().duration(1500).attr('transform', 'translate(0, 0)')
      d3.select('#fn-tag-naha-sync-polygon').transition().duration(1500).attr('transform', `translate(0, ${getCityPopRatioNaha})`)
    }, 1)
    setInterval(function () {
      if(startTotalPop <= getTotalPop) {
        addPop.innerText = startTotalPop.toLocaleString();
        startTotalPop++
      }
    }, duration)
  }
}

export default heatGraphSP