import { SELECT_PRODUCT, GET_PRODUCTS, SORT_PRODUCTS } from './actionsTypes'
import { apiCall } from './api'

export const selectProductAction = product => {
  return {
    type: SELECT_PRODUCT,
    product
  }
}

export const getProductsAction = () => {
  return apiCall({
    types: GET_PRODUCTS,
    endpoint: '/products.json'
  })
}

export const sortProductsAction = (sortBy, sortAscending) => ({
  type: SORT_PRODUCTS,
  sortBy,
  sortAscending
})
