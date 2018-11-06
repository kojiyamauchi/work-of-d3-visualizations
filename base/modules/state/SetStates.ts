/*

 SetStates.ts

*/

export default class SetStates {
  // Types.
  BW: number

  constructor() {
    this.BW = document.body.clientWidth
  }

  set setWidth(setWidthState: number) {
    this.BW = setWidthState
  }
  get getWidth() {
    return this.BW
  }
}
