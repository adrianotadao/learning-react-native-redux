const defaultState = {
  selected: 'feed'
}

const TabItem = (state = defaultState, action) => {
  switch (action.type) {
    case 'TAB_ITEM_FEED':
      return { ...state, selected: 'feed' }
    case 'TAB_ITEM_SPACES':
      return { ...state, selected: 'spaces' }
    case 'TAB_ITEM_FAVORITES':
      return { ...state, selected: 'favorites' }
    default:
      return state
  }
}

export default TabItem