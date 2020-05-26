import {  
    PLUS_PRODUCT, 
    MINUS_PRODUCT, 
    COUNT_PRICE_PRODUCTS, 
    DELETE_PRODUCT } from './actionsTypes'

export const plusProductAction = id => ({
  type: PLUS_PRODUCT,
  id
})

export const minusProductAction = id => ({
  type: MINUS_PRODUCT,
  id
})

export const countPricesAction = () => ({
  type: COUNT_PRICE_PRODUCTS,
})

export const deleteProductAction = id => ({
  type: DELETE_PRODUCT,
  id
})