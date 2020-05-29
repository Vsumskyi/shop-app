import {
	SELECT_PRODUCT,
	DELETE_PRODUCT,
	GET_PRODUCTS
} from '../Actions/actionsTypes'
import { createReducer } from 'Helpers/reducer'

const initialState = {
	data: [],
	selectedProduct: null,
	error: null,
	isLoaded: false 
}

const products = {
	[SELECT_PRODUCT]: (state = initialState, action) => {
		return {
			...state,
			data: state.data.map(i => {
				if (i.id === action.product.id) i.inCart = true
				return i
			}),
			selectedProduct: action.product
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
			data: data.products,
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
	}
}
export default createReducer(initialState, products)
