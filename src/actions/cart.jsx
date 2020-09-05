import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	CLEAR_CART,
	INCREMENT_AMOUNT,
	DECREMENT_AMOUNT,
	CALC_TOTALS,
	SET_CART_TO_LS
} from './types'

export const setCartToLs = () => async dispatch =>
	dispatch({ type: SET_CART_TO_LS })

export const addToCart = (product, amount = 1) => async dispatch => {
	const { _id, image, title, price } = product
	dispatch({
		type: ADD_TO_CART,
		payload: { _id, image, title, price, amount }
	})
}

export const removeFromCart = id => async dispatch =>
	dispatch({ type: REMOVE_FROM_CART, payload: id })

export const clearCart = () => async dispatch => dispatch({ type: CLEAR_CART })

export const incrementAmount = id => async dispatch =>
	dispatch({ type: INCREMENT_AMOUNT, payload: id })

export const decrementAmount = id => async dispatch =>
	dispatch({ type: DECREMENT_AMOUNT, payload: id })

export const calcTotals = () => async dispatch =>
	dispatch({ type: CALC_TOTALS })
