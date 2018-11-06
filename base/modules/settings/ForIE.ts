/*

 ForIE.ts

*/

export default class ForIE {
  // Types.
  showTarget!: NodeListOf<Element>
  hideTarget!: NodeListOf<Element>
  ua!: string

  constructor() {
    this.showTarget = document.querySelectorAll('.fn-IE-triangle-graph')
    this.hideTarget = document.querySelectorAll('.fn-svg-graph')
    this.ua = navigator.userAgent
  }

  branches() {
    if (this.ua.indexOf('MSIE') > -1 || this.ua.indexOf('Trident') > -1 || this.ua.indexOf('Edge') > -1) {
      Array.from(this.showTarget).map(info => {
        info.classList.add('is-IE')
      })
      Array.from(this.hideTarget).map(info => {
        info.classList.add('is-IE')
      })
    }
  }
}
