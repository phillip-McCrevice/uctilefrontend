import api from '../utils/api'
import {
	REGISTER,
	REGISTER_FAIL,
	LOGIN,
	LOGIN_FAIL,
	LOGOUT,
	USER_LOADED,
	AUTH_ERR
} from './types'

export const loadUser = () => async dispatch => {
	try {
		dispatch({ type: USER_LOADED })
	} catch (err) {
		console.error(err.message)
		dispatch({ type: AUTH_ERR, payload: err.response })
	}
}

export const register = ({ username, email, password }) => async dispatch => {
	try {
		const res = await api.post('/auth/local/register', {
			username,
			email,
			password
		})
		dispatch({ type: REGISTER, payload: res.data })
	} catch (err) {
		console.error(err.message)
		dispatch({ type: REGISTER_FAIL, payload: err.response })
	}
}

export const login = ({ email, password }) => async dispatch => {
	try {
		const res = await api.post('/auth/local', {
			identifier: email,
			password
		})
		dispatch({ type: LOGIN, payload: res.data })
	} catch (err) {
		console.error(err.message)
		dispatch({ type: LOGIN_FAIL, payload: err.response })
	}
}

export const logout = () => async dispatch => dispatch({ type: LOGOUT })
