let defaultState = {
  link: {}
}

const ItemList = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_ITEM':
      return { ...state, item: action.item }
    default:
      return state
  }
}

export default ItemList