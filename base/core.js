'use strict'

// Import Modules.
import addFlag from './modules/settings/addFlag'
import initHeatGraph from './modules/heatGraph/initHeatGraph'
import drawerClosed from './modules/drawers/drawerClosed'
import sliderClicked from './modules/sliders/sliderClicked'
import syncSliders from './modules/sliders/syncSliders'
import visualizationsDrawerPC from './modules/visualizationsDrawerPC'
import visualizationsDrawerSP from './modules/visualizationsDrawerSP'
import visualizations from './modules/visualizations'
import forIE from './modules/settings/forIE'

// Require All Functions.
addFlag()
initHeatGraph()
drawerClosed()
sliderClicked()
syncSliders()
visualizationsDrawerPC()
visualizationsDrawerSP()
visualizations()
forIE()