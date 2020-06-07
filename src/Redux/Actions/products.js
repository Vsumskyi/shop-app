import { SELECT_PRODUCT, GET_PRODUCTS } from './actionsTypes'
import { apiCall } from './api'

export const selectProductAction = product => ({
	type: SELECT_PRODUCT,
	product
})

export const getProductsAction = () => {
	return apiCall({
		types: GET_PRODUCTS,
		endpoint: '/products.json'
	})
}
