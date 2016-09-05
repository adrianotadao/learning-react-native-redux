import _spaces from './spaces.json'
import _feed from './feed.json'

const TIMEOUT = 100

export function spacesRequest(callback) {
  setTimeout(() => callback(_spaces), TIMEOUT)
}

export function feedRequest(callback) {
  setTimeout(() => callback(_feed), TIMEOUT)
}

export function getLink(linkId, callback) {
  let link = _feed.find(link => link.id === linkId)
  setTimeout(() => callback(link), TIMEOUT)
}