const defaultState = {
  links: []
}

const Feed = (state = defaultState, action) => {
  switch (action.type) {
    case 'RECEIVE_FEED':
      return { ...state, links: action.links }
    default:
      return state
  }
}

export default Feed