import {
	GET_PRODUCTS,
	GET_PRODUCT,
	GET_FEATURED,
	PRODUCTS_ERR
} from '../actions/types'

const initialState = {
	products: [],
	product: null,
	featured: [],
	loading: true,
	errors: null
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case GET_PRODUCT:
			return {
				...state,
				product: payload,
				loading: false
			}
		case GET_PRODUCTS:
			return {
				...state,
				products: payload,
				loading: false
			}
		case GET_FEATURED:
			return {
				...state,
				featured: payload,
				loading: false
			}
		case PRODUCTS_ERR:
			return {
				...state,
				errors: payload,
				loading: false
			}
		default:
			return state
	}
}
