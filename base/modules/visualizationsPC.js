'use strict'

// Import D3.js
import d3 from 'd3'

// Import Json.
import timeAlignment from '../json/timeAlignment.json'
import cityChecked from '../json/cityChecked.json'

// Import Heat Graph Functions.
import heatGraphPC from './heatGraphs/heatGraphPC'

// Visualizations PC Functions.
const visualizationsPC = () => {

  // Import CSV.
  const importCSV1 = './fv/csv/data.csv'

  // Core Functions.
  d3.csv(importCSV1, (error, csv1) => {

    d3.selectAll('.fn-triangle-graph-polygon').classed({
      'is-init': false
    }).attr('transform', 'translate(0, 160)')

    let totalPopArry = []
    const csv1Len = csv1.length
    const movie = document.getElementById('fn-movie')
    const cityBTNPC = document.querySelectorAll('.fn-tag')
    const cityBTNPCLen = cityBTNPC.length
    const timeAlignmentLen = timeAlignment.length
    const cityCheckedLen = cityChecked.length

    movie.addEventListener('timeupdate', () => {
      const getHour = document.querySelector('.fn-time').innerText
      const getMeridiem = document.querySelector('.fn-meridiem').innerText
      for(let i = 0; i < timeAlignmentLen; i++) {
        if(getMeridiem === timeAlignment[i].meridiem && getHour === timeAlignment[i].time) {
          const getMilitaryTime = timeAlignment[i].militaryTime
          for(let i = 0; i < cityBTNPCLen; i++) {
            const getID = cityBTNPC[i].getAttribute('id')
            for(let i = 0; i < cityCheckedLen; i++) {
              if(getID === cityChecked[i].buttonPC) {
                const getCity = cityChecked[i].searchWord
                for(let i = 0; i < csv1Len; i++) {
                  if(getMilitaryTime === csv1[i].time && getCity === csv1[i].city) {
                    totalPopArry.push(Number(csv1[i].population.replace(/\,/g, '')))
                  }
                }
              }
            }
            heatGraphPC(totalPopArry, getID)
          }
        }
      }
    })
  })
}

export default visualizationsPC
