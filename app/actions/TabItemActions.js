export function tabItemClicked(id) {
  switch (id) {
    case 'feed':
      return {
        type: 'TAB_ITEM_FEED'
      }
    case 'spaces':
      return {
        type: 'TAB_ITEM_SPACES'
      }
    case 'favorites':
      return {
        type: 'TAB_ITEM_FAVORITES'
      }
    default:
      return {
        type: 'TAB_ITEM_FEED'
      }
  }
}