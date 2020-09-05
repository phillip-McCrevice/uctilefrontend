import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { clearCart } from '../../../actions/cart'
import EmptyCart from '../../layout/EmptyCart'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import M from 'materialize-css/dist/js/materialize.min.js'
import api from '../../../utils/api'
import { useHistory } from 'react-router-dom'

const submitOrder = async ({
	name,
	total,
	items,
	stripeTokenId,
	user,
	userToken
}) => {
	try {
		const res = await api.post(
			'/orders',
			{
				name,
				total,
				items,
				stripeTokenId,
				user
			},
			{
				headers: {
					Authorization: `Bearer ${userToken}`
				}
			}
		)
		return res
	} catch (err) {
		console.error(err.message)
	}
}

const CheckoutForm = ({ cart, clearCart, total, user, userToken }) => {
	const stripe = useStripe()
	const elements = useElements()
	const history = useHistory()

	const [form, setForm] = useState({
		name: ''
	})

	const { name } = form

	const handleSubmit = async e => {
		e.preventDefault()
		if (!stripe || !elements) {
			return
		}

		const res = await stripe.createToken(elements.getElement(CardElement))

		if (res.error) {
			console.log(res.error)
			M.toast({ html: res.error.message })
		} else {
			const { token } = res
			const { id } = token
			let order = await submitOrder({
				name,
				total,
				items: cart,
				stripeTokenId: id,
				user,
				userToken
			})
			if (order) {
				M.toast({ html: 'Your order is complete' })
				clearCart()
				history.push('/')
			} else {
				M.toast({ html: 'There was an error with your order please try again' })
			}
		}
	}

	const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

	return (
		<form onSubmit={handleSubmit}>
			<div className='input-field'>
				<input
					type='text'
					name='name'
					id='name'
					value={name}
					onChange={onChange}
				/>
				<label htmlFor='name'>Name</label>
			</div>
			<CardElement />
			<br />
			<br />
			<button type='submit' className='btn pink darken-2' disabled={!stripe}>
				pay
			</button>
		</form>
	)
}

const Checkout = ({ cart, clearCart, total, user, userToken }) => {
	return (
		<Fragment>
			<header className='dashboard-header'>
				<Navbar backgroundColor={'grey darken-3'} />
			</header>
			<section className='section section-checkout'>
				<div className='container'>
					{cart.length < 1 ? (
						<EmptyCart />
					) : (
						<div className='row'>
							<div className='col s12'>
								<div className='card-panel'>
									<CheckoutForm
										cart={cart}
										clearCart={clearCart}
										total={total}
										user={user}
										userToken={userToken}
									/>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
			<Footer />
		</Fragment>
	)
}

const mapStateToProps = state => ({
	cart: state.cart.cart,
	total: state.cart.total,
	user: state.auth.user,
	userToken: state.auth.token
})

export default connect(mapStateToProps, { clearCart })(Checkout)
