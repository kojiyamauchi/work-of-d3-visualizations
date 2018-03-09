'use strict'

// Size Setting Triangle Graph SVG.
const sizeSettingSVG = () => {
  const target = document.querySelectorAll('.fn-triangle-graph-polygon')
  const targetLen = target.length
  const coreFunc = () => {
    const flagSP = document.body.classList.contains('sp')
    const flagPCTB = document.body.classList.contains('pctb')
    const flagPC = document.body.classList.contains('pc')
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
  }
  window.addEventListener('load', coreFunc, false)
  window.addEventListener('resize', coreFunc, false)
}

export default sizeSettingSVG