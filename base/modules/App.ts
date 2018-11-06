/*

 App.ts

*/

// Import Modules.
import CreateDataBase from '@/base/modules/database/CreateDataBase'
import SliderClicked from '@/base/modules/sliders/modules/SliderClicked'
import SyncSlider from '@/base/modules/sliders/modules/SyncSlider'
import SyncPlayMovie from '@/base/modules/sliders/modules/SyncPlayMovie'
import SyncSliderStyles from '@/base/modules/sliders/modules/SyncSliderStyles'
import VisualizationsFV from '@/base/modules/visualizations/VisualizationsFV'
import ForIE from '@/base/modules/settings/ForIE'
import AddFlag from '@/base/modules/settings/AddFlag'
import InitialTriangleGraph from '@/base/modules/settings/InitialTriangleGraph'
import InitialDrawer from '@/base/modules/settings/InitialDrawer'
import VisualizationsDrawer from '@/base/modules/visualizations/VisualizationsDrawer'

export default class App {
  // Types.
  createDataBase: CreateDataBase
  sliderClicked: SliderClicked
  syncSlider: SyncSlider
  syncPlayMovie: SyncPlayMovie
  syncSliderStyles: SyncSliderStyles
  visualizationsFV: VisualizationsFV
  forIE: ForIE
  addFlag: AddFlag
  initialTriangleGraph: InitialTriangleGraph
  initialDrawer: InitialDrawer
  visualizationsDrawer: VisualizationsDrawer

  constructor() {
    this.createDataBase = new CreateDataBase()
    this.sliderClicked = new SliderClicked()
    this.syncSlider = new SyncSlider()
    this.syncPlayMovie = new SyncPlayMovie()
    this.syncSliderStyles = new SyncSliderStyles()
    this.visualizationsFV = new VisualizationsFV()
    this.forIE = new ForIE()
    this.addFlag = new AddFlag()
    this.initialTriangleGraph = new InitialTriangleGraph()
    this.initialDrawer = new InitialDrawer()
    this.visualizationsDrawer = new VisualizationsDrawer()
  }

  async asyncInitialize() {
    await this.createDataBase.resolveDataBase()
    this.syncPlayMovie.callSyncMovie(this.createDataBase.propDataBaseTimeAlignment as [])
    this.visualizationsFV.callVisualizations(this.createDataBase.propDataBaseJapanese as [])
    this.initialDrawer.callCore(this.createDataBase.propDataBaseCityChecked as [])
    this.visualizationsDrawer.callDrawerPC(this.createDataBase.propDataBaseJapanese as [], this.createDataBase.propDataBaseTourists as [])
    this.visualizationsDrawer.callDrawerSP(this.createDataBase.propDataBaseJapanese as [], this.createDataBase.propDataBaseTourists as [])
  }

  initialize() {
    this.asyncInitialize()
    this.sliderClicked.callSliderClicked()
    this.syncSlider.callSyncSlider()
    this.syncSliderStyles.callSyncStyles()
    this.initialTriangleGraph.branches()
  }

  domContentLoaded() {
    // Add DOM Content Loaded Method.
  }

  load(getWidthState: number) {
    this.forIE.branches()
    this.addFlag.branches(getWidthState)
    this.initialTriangleGraph.branches()
  }

  resize(getWidthState: number) {
    this.addFlag.branches(getWidthState)
    this.initialTriangleGraph.branches()
  }

  scroll() {
    // Add Scroll Method.
  }
}
