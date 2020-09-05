import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	CLEAR_CART,
	INCREMENT_AMOUNT,
	DECREMENT_AMOUNT,
	CALC_TOTALS,
	SET_CART_TO_LS
} from '../actions/types'

const getCartFromLs = () =>
	localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const initialState = {
	cart: getCartFromLs(),
	total: 0,
	cartItems: 0
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case SET_CART_TO_LS:
			localStorage.setItem('cart', JSON.stringify(state.cart))
			return state
		case ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, payload]
			}
		case REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter(item => item._id !== payload)
			}
		case CALC_TOTALS:
			let newTotal = state.cart.reduce((total, cartItem) => {
				return (total += cartItem.amount * cartItem.price)
			}, 0)
			newTotal = parseFloat(newTotal.toFixed(2))
			return {
				...state,
				cartItems: state.cart.reduce((total, cartItem) => {
					return (total += cartItem.amount)
				}, 0),
				total: newTotal
			}
		case CLEAR_CART:
			return {
				...state,
				cart: []
			}
		case INCREMENT_AMOUNT:
			return {
				...state,
				cart: [...state.cart].map(item =>
					item._id === payload
						? { ...item, amount: item.amount + 1 }
						: { ...item }
				)
			}
		case DECREMENT_AMOUNT:
			return {
				...state,
				cart: [...state.cart].map(item =>
					item._id === payload
						? { ...item, amount: item.amount - 1 }
						: { ...item }
				)
			}
		default:
			return state
	}
}
