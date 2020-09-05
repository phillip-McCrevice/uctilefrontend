import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Solutions from '../pages/Solutions'
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/Dashboard'
import ProductsList from '../pages/Products/ProductsList'
import Cart from '../pages/Cart/Cart'
import PrivateRoute from './PrivateRoute'
import ProductDetails from '../pages/Products/ProductDetails'

const Routes = () => {
	return (
		<Fragment>
			<Switch>
				<Route exact path='/solutions'>
					<Solutions />
				</Route>
				<Route exact path='/signup'>
					<Signup />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/products'>
					<ProductsList />
				</Route>
				<Route exact path='/details/:id'>
					<ProductDetails />
				</Route>
				<Route exact path='/cart'>
					<Cart />
				</Route>
				<PrivateRoute exact path='/dashboard'>
					<Dashboard />
				</PrivateRoute>
			</Switch>
		</Fragment>
	)
}

export default Routes
