import { spacesRequest } from '../api/index'

export function receiveSpaces(spaces) {
  return {
    type: 'RECEIVE_SPACES',
    spaces: spaces
  }
}

export function getSpaces() {
  return (dispatch) => {
    spacesRequest((spaces) => {
      dispatch(receiveSpaces(spaces))
    })
  }
}