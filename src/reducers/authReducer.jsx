import {
	LOGIN,
	LOGIN_FAIL,
	REGISTER,
	REGISTER_FAIL,
	LOGOUT,
	USER_LOADED,
	AUTH_ERR
} from '../actions/types'

const initialState = {
	isAuthenticated: false,
	loading: true,
	user: localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user'))
		: null,
	token: localStorage.getItem('token'),
	errors: null
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated:
					state.user === null && state.token === null ? false : true,
				loading: false
			}
		case LOGIN:
		case REGISTER:
			localStorage.setItem('user', JSON.stringify(payload.user))
			localStorage.setItem('token', JSON.stringify(payload.jwt))
			return {
				...state,
				token: payload.jwt,
				user: payload.user,
				isAuthenticated: true,
				loading: false
			}
		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case AUTH_ERR:
		case LOGOUT:
			localStorage.removeItem('user')
			localStorage.removeItem('token')
			return {
				...state,
				loading: false,
				isAuthenticated: false,
				user: null,
				token: null,
				errors: payload
			}
		default:
			return state
	}
}
