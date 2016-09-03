import api from '../api/index'

export function receiveSpaces(spaces) {
  return {
    type: 'RECEIVE_SPACES',
    spaces: spaces
  }
}

export function getSpaces() {
  return (dispatch) => {
    api.getSpaces((spaces) => {
      dispatch(receiveSpaces(spaces))
    })
  }
}