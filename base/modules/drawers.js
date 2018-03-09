'use strict'

// Drawer Toggle Functions.
const drawers = () => {
  const drawer = document.querySelector('.fn-drawer-city')
  const hideBTN = document.querySelector('.fn-button-back-to-map')
  const showBTNPC = document.querySelectorAll('.fn-tag')
  const showBTNPCLen = showBTNPC.length
  const showBTNSP = document.querySelectorAll('.fn-button-city')
  const showBTNSPLen = showBTNSP.length
  const drawerHIDE = () => {
    drawer.classList.remove('is-active')
  }
  hideBTN.addEventListener('click', drawerHIDE, false)
  for(let i = 0; i < showBTNPCLen; i++) {
    showBTNPC[i].onclick = () => {
      drawer.classList.add('is-active')
    }
  }
  for(let i = 0; i < showBTNSPLen; i++) {
    showBTNSP[i].onclick = () => {
      drawer.classList.add('is-active')
    }
  }
}

export default drawers