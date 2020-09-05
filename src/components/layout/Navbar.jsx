import React, { Fragment, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { logout } from '../../actions/auth'
import { calcTotals } from '../../actions/cart'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({
	auth: { isAuthenticated },
	cartItems,
	logout,
	backgroundColor,
	calcTotals
}) => {
	useEffect(() => {
		M.AutoInit()
		calcTotals()
	}, [calcTotals])

	const guestLinks = (
		<ul className='right hide-on-med-and-down'>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/solutions'>Solutions</Link>
			</li>
			<li>
				<Link to='/products'>Products</Link>
			</li>
			<li>
				<Link to='/signup'>Sign Up</Link>
			</li>
			<li>
				<a
					href='#login-modal'
					className='btn pink darken-2 waves-effect waves-light modal-trigger'
				>
					Login
				</a>
			</li>
			<li>
				<Link
					to='/cart'
					className='tooltipped'
					data-position='right'
					data-tooltip={`${cartItems} items in cart`}
				>
					<i className='fad fa-shopping-cart'></i>
				</Link>
			</li>
		</ul>
	)

	const authLinks = (
		<ul className='right hide-on-med-and-down'>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/solutions'>Solutions</Link>
			</li>
			<li>
				<Link to='/products'>Products</Link>
			</li>
			<li>
				<Link to='/dashboard'>Dashboard</Link>
			</li>
			<li>
				<a
					href='/'
					onClick={logout}
					className='btn pink darken-2 waves-effect waves-light'
				>
					Logout
				</a>
			</li>
			<li>
				<Link
					to='/cart'
					className='tooltipped'
					data-position='right'
					data-tooltip={`${cartItems} items in cart`}
				>
					<i className='fad fa-shopping-cart'></i>
				</Link>
			</li>
		</ul>
	)

	const guestSideNavLinks = (
		<Fragment>
			<li>
				<div className='divider'></div>
			</li>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<div className='divider'></div>
			</li>
			<li>
				<Link to='/solutions'>Solutions</Link>
			</li>
			<li>
				<div className='divider'></div>
			</li>
			<li>
				<Link to='/products'>Products</Link>
			</li>
			<li>
				<div className='divider'></div>
			</li>
			<li>
				<Link to='/signup'>Sign Up</Link>
			</li>
			<li>
				<div className='divider'></div>
			</li>
			<li>
				<Link
					to='/cart'
					className='tooltipped'
					data-position='right'
					data-tooltip={`${cartItems} items in cart`}
				>
					<i className='fad fa-shopping-cart'></i>
				</Link>
			</li>
			<li>
				<div className='divider'></div>
			</li>
			<li>
				<a
					href='#login-modal'
					className='btn pink darken-2 modal-trigger btn-extend'
					style={{ margin: 'auto' }}
				>
					Login
				</a>
			</li>
		</Fragment>
	)

	const authSideNavLinks = (
		<Fragment>
			<li>
				<div className='divider'></div>
			</li>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<div className='divider'></div>
			</li>
			<li>
				<Link to='/solutions'>Solutions</Link>
			</li>
			<li>
				<div className='divider'></div>
			</li>
			<li>
				<Link to='/products'>Products</Link>
			</li>
			<li>
				<div className='divider'></div>
			</li>
			<li>
				<Link to='/dashboard'>Dashboard</Link>
			</li>
			<li>
				<div className='divider'></div>
			</li>
			<li>
				<Link
					to='/cart'
					className='tooltipped'
					data-position='right'
					data-tooltip={`${cartItems} items in cart`}
				>
					<i className='fad fa-shopping-cart'></i>
				</Link>
			</li>
			<li>
				<a
					href='/'
					onClick={logout}
					className='btn pink darken-2 waves-effect waves-light'
				>
					Logout
				</a>
			</li>
		</Fragment>
	)

	return (
		<Fragment>
			<nav className={backgroundColor}>
				<div className='container'>
					<div className='nav-wrapper'>
						<Link to='/' className='brand-logo'>
							<i className='fad fa-border-style-alt pink-text'></i> Unique
							Custom Tile
						</Link>
						<a href='# ' data-target='mobile-demo' className='sidenav-trigger'>
							<i className='fas fa-bars'></i>
						</a>
						{isAuthenticated ? (
							<Fragment>{authLinks}</Fragment>
						) : (
							<Fragment>{guestLinks}</Fragment>
						)}
					</div>
				</div>
			</nav>

			<ul className='sidenav' id='mobile-demo'>
				<h4 className='pink-text text-darken-2 center'>Unique Custom Tile</h4>
				{isAuthenticated ? authSideNavLinks : guestSideNavLinks}
			</ul>
		</Fragment>
	)
}

const mapStateToProps = state => ({
	auth: state.auth,
	cartItems: state.cart.cartItems
})

export default connect(mapStateToProps, { logout, calcTotals })(Navbar)
