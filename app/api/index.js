import _spaces from './spaces.json'

const TIMEOUT = 100

export default {
  getSpaces(callback) {
    setTimeout(() => callback(_spaces), TIMEOUT)
  }
}
