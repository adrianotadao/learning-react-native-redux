import { combineReducers } from 'redux'
import Spaces from './Spaces'
import TabItem from './TabItem'
import Feed from './Feed'
import ItemList from './ItemList'

const rootReducer = combineReducers({
  Spaces,
  TabItem,
  Feed,
  ItemList
})

export default rootReducer
