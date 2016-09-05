let defaultState = {
  link: {}
}

const Link = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_ITEM':
      return { ...state, link: action.link }
    default:
      return state
  }
}

export default Link