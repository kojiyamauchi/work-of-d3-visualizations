'use strict'

// Import D3.js
import d3 from "d3"

const visualization = () => {

  const importCSV = './csv/data.csv'

  d3.csv(importCSV, (error, csv) => {

    const cityBTNPC = document.querySelectorAll('.fn-tag')
    const cityBTNPCLen = cityBTNPC.length
    const cityBTNSP = document.querySelectorAll('.fn-button-city')
    const cityBTNSPLen = cityBTNSP.length
    for(let i = 0; i < cityBTNPCLen; i++) {
      cityBTNPC[i].onclick = () => {}
    }
    for(let i = 0; i < cityBTNSPLen; i++) {
      cityBTNSP[i].onclick = () => {}
    }

    const movie = document.getElementById('fn-movie')
    movie.addEventListener('timeupdate', () => {
      const getHour = document.querySelector('.fn-time').innerText
      const getMeridiem = document.querySelector('.fn-meridiem').innerText
    })

    const csvLen = csv.length
    for(let i = 0; i < csvLen; i++) {}

  })
}

export default visualization