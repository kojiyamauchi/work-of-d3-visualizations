/*

 AddFlag.ts

 */

export default class AddFlag {
  // Types.
  target!: HTMLElement | null
  SP!: number
  PCTB!: number
  PC!: number

  constructor() {
    this.target = document.querySelector('.first-view')
    this.SP = 768
    this.PCTB = 1280
    this.PC = 1920
  }

  branches(getWidthState: number) {
    if (getWidthState < this.SP) {
      this.target!.classList.add('sp')
      this.target!.classList.remove('pctb')
      this.target!.classList.remove('pc')
    } else if (getWidthState >= this.SP && getWidthState < this.PCTB) {
      this.target!.classList.add('pctb')
      this.target!.classList.remove('sp')
      this.target!.classList.remove('pc')
    } else if (getWidthState >= this.PCTB) {
      this.target!.classList.add('pc')
      this.target!.classList.remove('sp')
      this.target!.classList.remove('pctb')
    }
  }
}
