'use strict'

// Import Modules.
import addFlag from './modules/addFlag'
import sizeSettingSVG from './modules/sizeSettingSVG'
import syncSlider from './modules/syncSlider'
import sliderClicked from './modules/sliderClicked'
import sliders from './modules/sliders'
import drawers from './modules/drawers'
import visualizationsPC from './modules/visualizationsPC'
import visualizationsDrawerPC from './modules/visualizationsDrawerPC'
import visualizationsSP from './modules/visualizationsSP'
import visualizationsDrawerSP from './modules/visualizationsDrawerSP'

const requireDeviceFunctions = () => {
  const coreFunction = () => {
    const target = document.querySelector('.first-view')
    const clsCheck1 = target.classList.contains('pc')
    const clsCheck2 = target.classList.contains('pctb')
    const clsCheck3 = target.classList.contains('sp')
    if(clsCheck1 || clsCheck2) {
      visualizationsPC()
      visualizationsDrawerPC()
    }
    if(clsCheck3) {
      visualizationsSP()
      visualizationsDrawerSP()
    }
  }
  window.addEventListener('load', coreFunction, false)
  window.addEventListener('resize', coreFunction, false)
}

// Require All Functions.
addFlag()
sizeSettingSVG()
syncSlider()
sliderClicked()
sliders()
drawers()
requireDeviceFunctions()