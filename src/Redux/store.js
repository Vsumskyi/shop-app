import {createStore, applyMiddleware} from 'redux'
import api from './Middleware/apiMiddleware'
import { composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from './Reducer/rootReducer'

export const storeCreator = () => {
  const enhancer = composeWithDevTools(applyMiddleware(api))
  return createStore(rootReducer, enhancer)
}