'use strict'

// Import for Device Functions.
import visualizationsPC from './visualizationsPC'
import visualizationsDrawerPC from './visualizationsDrawerPC'
import visualizationsSP from './visualizationsSP'
import visualizationsDrawerSP from './visualizationsDrawerSP'

const deviceJunctions = () => {
  const coreFunctions = () => {
    const target = document.querySelector('.first-view')
    const flagCheckPC = target.classList.contains('pc')
    const flagCheckPCTB = target.classList.contains('pctb')
    const flagCheckSP = target.classList.contains('sp')
    if(flagCheckPC || flagCheckPCTB) {
      visualizationsPC()
      visualizationsDrawerPC()
    }
    if(flagCheckSP) {
      visualizationsSP()
      visualizationsDrawerSP()
    }
  }
  window.addEventListener('load', coreFunctions, false)
  window.addEventListener('resize', coreFunctions, false)
}

export default deviceJunctions
