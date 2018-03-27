'use strict'

// Import Modules.
import forIE from './modules/settings/forIE'
import addFlag from './modules/settings/addFlag'
import initHeatGraph from './modules/heatGraph/initHeatGraph'
import drawerClosed from './modules/drawers/drawerClosed'
import sliderClicked from './modules/sliders/sliderClicked'
import syncSliders from './modules/sliders/syncSliders'
import visualizationsDrawerPC from './modules/visualizationsDrawerPC'
import visualizationsDrawerSP from './modules/visualizationsDrawerSP'
import visualizations from './modules/visualizations'

// Require All Functions.
forIE()
addFlag()
initHeatGraph()
drawerClosed()
sliderClicked()
syncSliders()
visualizationsDrawerPC()
visualizationsDrawerSP()
visualizations()
