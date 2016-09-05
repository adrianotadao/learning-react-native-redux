import _spaces from './spaces.json'
import _feed from './feed.json'

const TIMEOUT = 100

export function spacesRequest(callback) {
  setTimeout(() => callback(_spaces), TIMEOUT)
}

export function feedRequest(callback) {
  setTimeout(() => callback(_feed), TIMEOUT)
}

export function getItem(itemId, callback) {
  let item = _feed.find(item => item.id === itemId)
  setTimeout(() => callback(item), TIMEOUT)
}