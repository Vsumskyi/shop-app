import axios from 'axios'
import { API_REQUEST } from '../Actions/actionsTypes'

const apiCall = ({
	url = 'https://server-shop.firebaseio.com/',
	endpoint = '',
	method = 'GET',
	body = {},
	headers = {}
}) => {
	return new Promise((resolve, reject) => {
		axios({ url: `${url}${endpoint}`, method, data: body, headers })
			.then(responce => resolve(responce))
			.catch(err => reject(err))
	})
}

export default state => next => action => {
	if (action.type !== API_REQUEST || !action.apiData) return next(action)
	const { url, endpoint, method, body, headers, types } = action.apiData

	next({ type: types.REQUEST })

	const onSuccess = responce => {
		const resp = responce.data
		next({ type: types.SUCCESS, resp })
	}

	const onError = err => {
		let errorType = ''
		if (err.data && err.staus === 401) {
			errorType = 'Unauthorised'
		}
		next({ type: types.FAIL, errorType })
	}

	apiCall({ url, endpoint, method, body, headers })
		.then(onSuccess, onError)
		.catch(err => console.log('err', err))
}
