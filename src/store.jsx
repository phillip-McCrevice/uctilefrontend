import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import setAuthToken from './utils/setAuthToken'

const initialState = {}

const middleware = [thunk]

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

// setup a store subscription listener
// to store the users token in localstorage

// initialize current state from redux store for subscription comparison
// preventing undefined behavior
let currentState = store.getState()

store.subscribe(() => {
	// keep track of the current and previous state to compare changes
	let prevState = currentState
	currentState = store.getState()

	// if the token changes set the value in localstorage and axios headers
	if (prevState.auth.token !== currentState.auth.token) {
		const token = currentState.auth.token
		setAuthToken(token)
	}
})

export default store
