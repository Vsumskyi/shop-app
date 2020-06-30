import {
  SELECT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  SORT_PRODUCTS
} from '../Actions/actionsTypes'
import { createReducer } from 'Helpers/reducer'

const initialState = {
  data: [],
  selectedProduct: null,
  error: null,
  isLoaded: false,
  sortBy: 'name',
  sortAscending: true
}

const products = {
  [SELECT_PRODUCT]: (state = initialState, { product }) => {
    return {
      ...state,
      data: state.data.map(i => {
        if (i.id === product.id) i.inCart = true
        return i
      }),
      selectedProduct: product
    }
  },
  [DELETE_PRODUCT]: (state = initialState, action) => {
    return {
      ...state,
      data: state.data.map(i => {
        if (i.id === action.id) i.inCart = false
        return i
      })
    }
  },
  [GET_PRODUCTS.SUCCESS]: (state = initialState, data) => {
    return {
      ...state,
      data: data.resp,
      error: null,
      isLoaded: false
    }
  },
  [GET_PRODUCTS.FAILURE]: (state = initialState, { error }) => {
    return {
      ...state,
      error,
      isLoaded: false
    }
  },
  [GET_PRODUCTS.REQUEST]: (state = initialState) => {
    return {
      ...state,
      isLoaded: true
    }
  },
  [SORT_PRODUCTS]: (state = initialState, { sortBy, sortAscending }) => {
    return {
      ...state,
      sortBy,
      sortAscending
    }
  }
}
export default createReducer(initialState, products)
