'use strict'

// Drawer Total Population Count Up Functions.
const drawerTotalPopCountUp = totalPopArry => {
  const totalPop = document.querySelector('.fn-app-population')
  const maleWrap = document.querySelector('.gender-male-wrapper')
  const femaleWrap = document.querySelector('.gender-female-wrapper')
  const totalPopArryLen = totalPopArry.length
  let addTotalPop = 0
  for(let i = 0; i < totalPopArryLen; i++) {
    addTotalPop += totalPopArry[i]
  }
  let startTotalPop = addTotalPop - 100
  const getTotalPop = addTotalPop
  const getMalePop = totalPopArry[0]
  const getFemalePop = totalPopArry[1]
  const getMaleWidth = getMalePop / getTotalPop * 100
  const getFemaleWidth = getFemalePop / getTotalPop * 100
  const duration = 10;
  maleWrap.style.width = `${getMaleWidth}%`
  femaleWrap.style.width = `${getFemaleWidth}%`
  totalPopArry.length = 0
  setTimeout(() => {
    setInterval(() => {
      if(startTotalPop <= getTotalPop) {
        totalPop.innerText = startTotalPop.toLocaleString();
        startTotalPop++;
      }
    }, duration)
  }, 500)
}

export default drawerTotalPopCountUp