import axios from 'axios'
// import store from '../store'

const api = axios.create({
	// baseURL: 'http://localhost:1337',
	baseURL: 'https://uctile-api.herokuapp.com'
	headers: {
		'Content-Type': 'application/json'
	}
})

// api.interceptors.response.use(
// 	res => res,
// 	err => {
// 		if (err.response.data.msg === 'Token is not valid') {
// 			store.dispatch({ type: LOGOUT })
// 		}
// 		return Promise.reject(err)
// 	}
// )

export default api
