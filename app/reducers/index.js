import { combineReducers } from 'redux'
import Spaces from './Spaces'
import TabItem from './TabItem'
import Feed from './Feed'
import Link from './Link'

const rootReducer = combineReducers({
  Spaces,
  TabItem,
  Feed,
  Link
})

export default rootReducer
