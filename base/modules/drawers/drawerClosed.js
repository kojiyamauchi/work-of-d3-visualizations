'use strict'

// Import Json.
import cityChecked from '../../../json/cityChecked.json'

// Drawer Close Functions.
const drawerClosed = () => {
  const closeBTN = document.querySelector('.fn-button-back-to-map')
  const movie = document.getElementById('fn-movie')
  const drawer = document.querySelector('.fn-drawer-city')
  const totalPop = document.querySelector('.fn-app-population')
  const malePop = document.querySelector('.fn-app-male-population')
  const femalePop = document.querySelector('.fn-app-female-population')
  const foreignTotalPop = document.querySelector('.fn-app-visited-population')
  const maleWrap = document.querySelector('.fn-gender-male-wrapper')
  const femaleWrap = document.querySelector('.fn-gender-female-wrapper')
  const maleGraph = document.querySelector('.fn-app-female-graph-inner')
  const femaleGraph = document.querySelector('.fn-app-male-graph-inner')
  const drawerHeatGraphWrap = document.querySelector('.fn-add-heat-graph')
  const countriesPop = document.querySelectorAll('.fn-countries-population')
  const countriesGraphWrap = document.querySelectorAll('.fn-graph-countries-population')
  const countriesGraph = document.querySelectorAll('.fn-graph-countries-population-inner')
  const countriesPopLen = countriesPop.length
  const drawerCityBG = document.querySelector('.fn-city-map')
  const cityCheckedLen = cityChecked.length

  const coreFunc = () => {
    movie.play()
    drawer.classList.remove('is-active')
    totalPop.innerText = `ーーーーー`
    malePop.innerText = `ーーーーー`
    femalePop.innerText = `ーーーーー`
    foreignTotalPop.innerText = `ーーーー`
    maleWrap.removeAttribute('style')
    femaleWrap.removeAttribute('style')
    maleGraph.removeAttribute('style')
    femaleGraph.removeAttribute('style')
    drawerHeatGraphWrap.textContent = null
    for(let i = 0; i < countriesPopLen; i++) {
      countriesPop[i].innerText = `ーーー`
      countriesGraphWrap[i].removeAttribute('style')
      countriesGraph[i].removeAttribute('style')
    }
    for(let i = 0; i < cityCheckedLen; i++) {
      const getCityLower = cityChecked[i].cityLowerEN
      drawerCityBG.classList.remove(cityChecked[i].cityLowerEN)
    }
    closeBTN.disabled = true
  }
  closeBTN.addEventListener('click', coreFunc, false)
}

export default drawerClosed
