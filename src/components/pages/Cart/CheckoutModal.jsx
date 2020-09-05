import React, { useState } from 'react'
import { connect } from 'react-redux'
import { clearCart } from '../../../actions/cart'
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
		name: '',
		shippingAddr: '',
		billingAddr: ''
	})

	const { name, shippingAddr, billingAddr } = form

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
					name='shippingAddr'
					id='shippingAddr'
					value={shippingAddr}
					onChange={onChange}
				/>
				<label htmlFor='shippingAddr'>Shipping Address</label>
			</div>
			<div className='input-field'>
				<input
					type='text'
					name='billingAddr'
					id='billingAddr'
					value={billingAddr}
					onChange={onChange}
				/>
				<label htmlFor='billingAddr'>Billing Address</label>
			</div>
			<div className='input-field'>
				<input
					type='text'
					name='name'
					id='name'
					value={name}
					onChange={onChange}
				/>
				<label htmlFor='name'>Name on card</label>
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

const CheckoutModal = ({ cart, total, user, userToken, clearCart }) => {
	return (
		<div className='modal' id='checkout-modal'>
			<div className='modal-content'>
				<h4 className='grey-text'>Order Checkout</h4>
				<div className='divider'></div>
				<CheckoutForm
					cart={cart}
					clearCart={clearCart}
					total={total}
					user={user}
					userToken={userToken}
				/>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	cart: state.cart.cart,
	total: state.cart.total,
	user: state.auth.user,
	userToken: state.auth.token
})

export default connect(mapStateToProps, { clearCart })(CheckoutModal)
