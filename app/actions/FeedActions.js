import { feedRequest } from '../api/index'

export function receiveFeed(links) {
  return {
    type: 'RECEIVE_FEED',
    links: links
  }
}

export function getFeed() {
  return (dispatch) => {
    feedRequest((links) => {
      dispatch(receiveFeed(links))
    })
  }
}