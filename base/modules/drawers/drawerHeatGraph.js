'use strict'

// Drawer Heat Graph Functions.
const drawerHeatGraph = getCityLower => {
  const target = document.querySelector('.fn-add-heat-graph')
  const getHeatGraph = document.querySelector(`.fn-triangle-graph-${getCityLower}`)
  const cloneHeatGraph = getHeatGraph.cloneNode(true)
  const getSVG = cloneHeatGraph.firstElementChild
  const setClsSVG = getSVG.classList.add('clone-svg-graph')
  const getDefs = getSVG.lastElementChild
  const getClipPath = getDefs.lastElementChild
  const repID = getClipPath.setAttribute('id', 'clone-svg-clip')
  target.appendChild(cloneHeatGraph)
}

export default drawerHeatGraph