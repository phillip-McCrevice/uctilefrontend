import { GET_FEATURED, GET_PRODUCTS, GET_PRODUCT, PRODUCTS_ERR } from './types'
import api from '../utils/api'

export const getProducts = () => async dispatch => {
	try {
		const res = await api.get('/products')
		// console.log(res.data)
		dispatch({ type: GET_PRODUCTS, payload: res.data })
	} catch (err) {
		console.error(err.message)
		dispatch({ type: PRODUCTS_ERR, payload: err.response })
	}
}

export const getProduct = id => async dispatch => {
	try {
		const res = await api.get(`/products/${id}`)
		// console.log(res.data)
		dispatch({ type: GET_PRODUCT, payload: res.data })
	} catch (err) {
		console.error(err.message)
		dispatch({ type: PRODUCTS_ERR, payload: err.response })
	}
}

export const getFeatured = () => async dispatch =>
	dispatch({ type: GET_FEATURED })
