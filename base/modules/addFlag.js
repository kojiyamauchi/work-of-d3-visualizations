'use strict'

// Add Flag on Body Functions.
const addFlag = () => {
  const target = document.querySelector('.first-view')
  const SP = 768
  const PCTB = 1280
  const PC = 1920
  const coreFunc = () => {
    const WW = window.innerWidth
    if(WW < SP) {
      target.classList.add('sp')
      target.classList.remove('pctb')
      target.classList.remove('pc')
    } else if(WW >= SP && WW < PCTB) {
      target.classList.add('pctb')
      target.classList.remove('sp')
      target.classList.remove('pc')
    } else if(WW >= PCTB) {
      target.classList.add('pc')
      target.classList.remove('sp')
      target.classList.remove('pctb')
    }
  }
  window.addEventListener('load', coreFunc, false)
  window.addEventListener('resize', coreFunc, false)
}

export default addFlag