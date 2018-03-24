'use strict'

// Drawer Heat Graph Functions.
const drawerHeatGraph = getCityLower => {
  const getHeatGraph = document.querySelector(`.triangle-graph-${getCityLower}`)
  const cloneHeatGraph = getHeatGraph.cloneNode(true)
  const getSVG = cloneHeatGraph.firstElementChild
  const setClsSVG = getSVG.classList.add('clone-svg-graph')
  const getDefs = getSVG.lastElementChild
  const getClipPath = getDefs.lastElementChild
  const repID = getClipPath.setAttribute('id', 'clone-svg-clip')
  const target = document.querySelector('.add-heat-graph')
  target.appendChild(cloneHeatGraph)
}

export default drawerHeatGraph