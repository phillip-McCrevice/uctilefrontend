import { combineReducers } from 'redux'
import productReducer from './productsReducer'
import authReducer from './authReducer'
import cartReducer from './cartReducer'

export default combineReducers({
	products: productReducer,
	auth: authReducer,
	cart: cartReducer
})
