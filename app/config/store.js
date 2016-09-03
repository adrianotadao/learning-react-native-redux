import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

let createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

const store = function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}

export default store