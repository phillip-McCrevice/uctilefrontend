import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SubscribeModal from './components/pages/SubscribeModal'
import LoginModal from './components/pages/auth/LoginModal'
import M from 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import Routes from './components/routing/Routes'
import Home from './components/pages/Home/Home'
import { loadUser } from './actions/auth'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutModal from './components/pages/Cart/CheckoutModal'

const stripePromise = loadStripe(
	'pk_test_51H2lBDC82apNfPyN6gsD5jl6aJWytR3Zomof8CNnWazpHjJwRNfpZeeVesm72HD71J3fg9LhvKHxv7WEyux6xo6z000PvC1nat'
)

const App = () => {
	useEffect(() => {
		M.AutoInit()
		store.dispatch(loadUser())
	}, [])
	return (
		<Provider store={store}>
			<Elements stripe={stripePromise}>
				<Router>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route>
							<Routes />
						</Route>
					</Switch>
					<LoginModal />
					<SubscribeModal />
					<CheckoutModal />
				</Router>
			</Elements>
		</Provider>
	)
}

export default App
