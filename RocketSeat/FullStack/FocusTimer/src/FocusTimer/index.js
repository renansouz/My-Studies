import state from './state.js'
import * as events from './events.js'

export function start(minutes, seconds){
  state.minutes = minutes
  state.secondes = seconds

  events.registerControls()
}