const EventEmitter = require('events')
const extend = require('xtend')


module.exports = class ObservableStore extends EventEmitter {
  constructor (initState = {}) {
    super()
    this._state = initState
  }

  getState () {
    return this._state
  }

  updateState (newState) {
    this._state = extend(this._state, newState)
    this.emit('update', this._state)
  }

  setState (newState) {
    this._state = newState
    this.emit('update', this._state)
  }
}