'use strict'

// Drawer Hide Functions.
const drawers = () => {
  const drawer = document.querySelector('.fn-drawer-city')
  const hideBTN = document.querySelector('.fn-button-back-to-map')
  const drawerHIDE = () => {
    drawer.classList.remove('is-active')
  }
  hideBTN.addEventListener('click', drawerHIDE, false)
}

export default drawers