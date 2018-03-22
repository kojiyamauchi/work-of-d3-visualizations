'use strict'

// Import D3.js
import d3 from 'd3'

// Init Heat Graph Functions.
const initHeatGraph = () => {
  const target = document.querySelectorAll('.fn-triangle-graph-polygon')
  const targetLen = target.length
  const checkFlag = document.querySelector('.first-view')
  const coreFunc = () => {
    const flagSP = checkFlag.classList.contains('sp')
    const flagPCTB = checkFlag.classList.contains('pctb')
    const flagPC = checkFlag.classList.contains('pc')
    const addSizePoint = flagSP ? `62` : flagPCTB ? `107` : `162`
    if(flagSP) {
      for(let i = 0; i < targetLen; i++) {
        target[i].setAttribute('points', '11,0 23,62 0,62');
      }
    }
    if(flagPCTB) {
      for(let i = 0; i < targetLen; i++) {
        target[i].setAttribute('points', '20,0 40,107 0,107');
      }
    }
    if(flagPC) {
      for(let i = 0; i < targetLen; i++) {
        target[i].setAttribute('points', '30,0 60,160 0,160');
      }
    }
    d3.selectAll(target).classed({
      'is-init': false
    }).attr('transform', `translate(0, ${addSizePoint})`)
  }
  window.addEventListener('load', coreFunc, false)
  window.addEventListener('resize', coreFunc, false)
}

export default initHeatGraph