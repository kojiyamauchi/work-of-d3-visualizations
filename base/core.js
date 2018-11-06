/*

 Core.js

*/

// Import Modules.
import App from '@/base/modules/App'
import SetStates from '@/base/modules/state/SetStates'

// Created Instance.
const app = new App()
const setStates = new SetStates()

// Initial.
app.initialize()

// DOM Content Loaded.
window.addEventListener('DOMContentLoaded', () => {
  // Call DOM Content Loaded Method.
})

// Load.
window.addEventListener('load', () => {
  // Call Load Method.
  app.load(setStates.getWidth)
})

// Resize.
window.addEventListener('resize', () => {
  // Set View State.
  setStates.setWidth = document.body.clientWidth
  // Call Resize Method.
  app.resize(setStates.getWidth)
})

// Scroll.
window.addEventListener('scroll', () => {
  // Call Scroll Method.
})
