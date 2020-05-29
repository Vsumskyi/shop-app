import {createReducer} from 'Helpers/reducer'

import { 
  SELECT_PRODUCT, 
  PLUS_PRODUCT, 
  MINUS_PRODUCT,
  COUNT_PRICE_PRODUCTS, 
  DELETE_PRODUCT} from "../Actions/actionsTypes"

const initialState = {
cartItems: [],
prices: 0,
}

const cart = {
[SELECT_PRODUCT]: (state = initialState, action) => {
    return {
      ...state, 
      cartItems: [...state.cartItems, action.product]
    }
},
[PLUS_PRODUCT]: (state = initialState, action) => {
  return {
    ...state, 
    cartItems : state.cartItems.map(i => {
      if (i.id === action.id ) i.count += 1
      return i
    }) 
  }
},
[MINUS_PRODUCT]: (state = initialState, action) => {
  return {
    ...state, 
    cartItems : state.cartItems.map(i => {
      if (i.id === action.id) i.count -= 1
      return i
    })
  }
},
[DELETE_PRODUCT]: (state = initialState, action) => {
  return {
    ...state,
    cartItems: state.cartItems.filter(i => i.id !== action.id)
  }
},
[COUNT_PRICE_PRODUCTS]: (state = initialState, action) => {
  return {
    ...state,
    prices : state.cartItems.reduce((acc,curr) => acc += curr.count * curr.price,0)
  }
}
}

export default createReducer(initialState, cart)