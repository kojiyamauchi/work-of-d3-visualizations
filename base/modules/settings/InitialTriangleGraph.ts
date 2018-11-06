/*

 InitialTriangleGraph.ts

*/

// Import D3 Selection
import * as d3 from 'd3-selection'

export default class InitialTriangleGraph {
  // Types.
  target!: NodeListOf<HTMLElement>
  checkFlag!: HTMLElement | null
  addSizePoint!: string

  constructor() {
    this.target = document.querySelectorAll('.fn-triangle-graph-polygon')
    this.checkFlag = document.querySelector('.first-view')
  }

  branches() {
    const flagSP = this.checkFlag!.classList.contains('sp')
    const flagPCTB = this.checkFlag!.classList.contains('pctb')
    const flagPC = this.checkFlag!.classList.contains('pc')
    const addSizePoint = flagSP ? `62` : flagPCTB ? `107` : `162`
    if (flagSP) {
      Array.from(this.target).map(info => {
        info.setAttribute('points', '11,0 23,62 0,62')
      })
    }
    if (flagPCTB) {
      Array.from(this.target).map(info => {
        info.setAttribute('points', '20,0 40,107 0,107')
      })
    }
    if (flagPC) {
      Array.from(this.target).map(info => {
        info.setAttribute('points', '30,0 60,160 0,160')
      })
    }
    d3.selectAll(this.target)
      .classed('is-init', false)
      .attr('transform', `translate(0, ${addSizePoint})`)
  }
}
