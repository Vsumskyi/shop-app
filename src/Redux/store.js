import {createStore} from 'redux'
import {rootReducer} from './Reducer/rootReducer'

export const storeCreator = () => {
  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return store;
}