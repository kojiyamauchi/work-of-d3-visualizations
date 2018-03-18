'use strict'

// Drawer Total Population of Foreign Tourist Count Up Functions.
const drawerForeignTotalPopCountUp = totalForeignArry => {
  const foreignTotalPop = document.querySelector('.fn-app-visited-population')
  const totalForeignArryLen = totalForeignArry.length
  let addTotalPop = totalForeignArry.reduce((current, arryForeign) => current += arryForeign, 0)
  let startTotalPop = addTotalPop - 100
  const getTotalPop = addTotalPop
  const duration = 10;
  totalForeignArry.length = 0
  setTimeout(() => {
    setInterval(() => {
      if(startTotalPop <= getTotalPop) {
        foreignTotalPop.innerText = startTotalPop.toLocaleString();
        startTotalPop++;
      }
    }, duration)
  }, 500)
}

export default drawerForeignTotalPopCountUp