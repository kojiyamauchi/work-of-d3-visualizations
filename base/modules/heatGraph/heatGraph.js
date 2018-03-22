'use strict'

// Import D3.js
import d3 from "d3"

// Heat Graph PC Functions.
const heatGraph = (totalPopArry, getID) => {

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
      const checkFlag = document.querySelector('.first-view')
      const flagSP = checkFlag.classList.contains('sp')
      const flagPCTB = checkFlag.classList.contains('pctb')
      const flagPC = checkFlag.classList.contains('pc')
      const addSizePoint = flagSP ? `62` : flagPCTB ? `107` : `162`
      const addBasisRatio = flagSP ? `1` : `0.8`
      const setBasisCity = document.getElementById('fn-tag-osaka')
      const getBasisPop = setBasisCity.firstElementChild.innerText
      const getCityPopRatio = addSizePoint - addSizePoint * (dummyChild.innerText / getBasisPop * addBasisRatio)
      const getCityPopRatioNaha = addSizePoint - addSizePoint * (dummyChild.innerText / getBasisPop * 2.5)
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

export default heatGraph