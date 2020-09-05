import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ children, auth: { isAuthenticated }, ...rest }) => (
	<Route
		{...rest}
		render={({ location }) =>
			isAuthenticated ? (
				children
			) : (
				<Redirect to={{ pathname: '/signup', state: { from: location } }} />
			)
		}
	/>
)

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
