'use strict'

// Drawer Hide Functions.
const drawers = () => {
  const drawer = document.querySelector('.fn-drawer-city')
  const totalPop = document.querySelector('.fn-app-population')
  const malePop = document.querySelector('.fn-app-male-population')
  const femalePop = document.querySelector('.fn-app-female-population')
  const maleWrap = document.querySelector('.gender-male-wrapper')
  const femaleWrap = document.querySelector('.gender-female-wrapper')
  const maleGraph = document.querySelector('.fn-app-female-graph-inner')
  const femaleGraph = document.querySelector('.fn-app-male-graph-inner')
  const hideBTN = document.querySelector('.fn-button-back-to-map')
  const countriesGraphWrap = document.querySelectorAll('.fn-graph-countries-population')
  const countriesGraph = document.querySelectorAll('.fn-graph-countries-population-inner')
  const countriesGraphWrapLen = countriesGraphWrap.length

  const drawerHIDE = () => {
    drawer.classList.remove('is-active')
    totalPop.innerText = `ーーーーー`
    malePop.innerText = `ーーーーー`
    femalePop.innerText = `ーーーーー`
    maleWrap.removeAttribute('style')
    femaleWrap.removeAttribute('style')
    maleGraph.removeAttribute('style')
    femaleGraph.removeAttribute('style')
    for(let i = 0; i < countriesGraphWrapLen; i++) {
      countriesGraphWrap[i].removeAttribute('style')
      countriesGraph[i].removeAttribute('style')
    }
  }
  hideBTN.addEventListener('click', drawerHIDE, false)
}

export default drawers