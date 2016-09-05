import { combineReducers } from 'redux'
import Spaces from './Spaces'
import TabItem from './TabItem'
import Feed from './Feed'

const rootReducer = combineReducers({
  Spaces,
  TabItem,
  Feed
})

export default rootReducer
