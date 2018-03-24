'use strict'

// For IE Functions.
const forIE = () => {
  const showTarget = document.querySelectorAll('.for-IE-triangle-graph')
  const targetLen = showTarget.length
  const hideTarget = document.querySelectorAll('.fn-svg-graph')
  const ua = navigator.userAgent
  if(ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1 || ua.indexOf('Edge') > -1) {
    for(let i = 0; 0 < targetLen; i++) {
      showTarget[i].classList.add('is-IE')
      hideTarget[i].classList.add('is-IE')
    }
  }
}

export default forIE