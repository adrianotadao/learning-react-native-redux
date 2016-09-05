import _spaces from './spaces.json'
import _feed from './feed.json'

const TIMEOUT = 100

export function spacesRequest(callback) {
  setTimeout(() => callback(_spaces), TIMEOUT)
}

export function feedRequest(callback) {
  setTimeout(() => callback(_feed), TIMEOUT)
}