const defaultState = {
  spaces: []
}

const Spaces = (state = defaultState, action) => {
  switch (action.type) {
    case 'RECEIVE_SPACES':
      return { ...state, spaces: action.spaces }
    default:
      return state
  }
}

export default Spaces