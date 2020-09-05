import React, { Fragment, useEffect } from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import EmptyCart from '../../layout/EmptyCart'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import { calcTotals, setCartToLs, clearCart } from '../../../actions/cart'
import { Link } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'

const Cart = ({
	cart,
	cartItems,
	calcTotals,
	total,
	setCartToLs,
	clearCart,
	isAuthenticated
}) => {
	useEffect(() => {
		calcTotals()
		setCartToLs()
	}, [calcTotals, cart, cartItems, setCartToLs])

	return (
		<Fragment>
			<header className='dashboard-header'>
				<Navbar backgroundColor={'grey darken-3'} />
			</header>
			<section className='section section-cart'>
				{cart.length === 0 ? (
					<EmptyCart />
				) : (
					<Fragment>
						<div className='row'>
							<div className='col s12'>
								<h4>Your Cart ({cartItems})</h4>
								<div className='divider'></div>
							</div>
						</div>
						<div className='row'>
							<div className='col s12 m8 l7'>
								{cart.map(item => (
									<CartItem key={item._id} item={item} />
								))}
							</div>
							<div className='col s12 m4 l5'>
								<div className='card-panel'>
									<button
										className='btn right pink darken-2'
										onClick={() => clearCart()}
									>
										Clear Cart
									</button>
									<h5>Order Summary</h5>
									<ul className='collection'>
										{cart.map(item => (
											<li key={item._id} className='collection-item'>
												{item.title}
											</li>
										))}
									</ul>
									{isAuthenticated ? (
										<a
											href='#checkout-modal'
											className='btn btn-large pink darken-2 right modal-trigger'
										>
											Checkout
										</a>
									) : (
										<Link
											to='/signup'
											className='btn btn-large pink darken-2 right'
											onClick={() =>
												M.toast({
													html:
														'Login or create an account to proceed with your order'
												})
											}
										>
											Checkout
										</Link>
									)}
									<h4>Total: ${total}</h4>
								</div>
							</div>
						</div>
					</Fragment>
				)}
			</section>
			<Footer />
		</Fragment>
	)
}

const mapStateToProps = state => ({
	cart: state.cart.cart,
	cartItems: state.cart.cartItems,
	total: state.cart.total,
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { calcTotals, setCartToLs, clearCart })(
	Cart
)
