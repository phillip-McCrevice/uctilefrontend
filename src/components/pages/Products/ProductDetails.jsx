import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import Spinner from '../../layout/Spinner'
import { getProduct } from '../../../actions/products'
import { addToCart, incrementAmount } from '../../../actions/cart'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const ProductDetails = ({ product, getProduct, addToCart, cart }) => {
	const [amount, setAmount] = useState(1)
	const { id } = useParams()
	const history = useHistory()

	useEffect(() => {
		getProduct(id)
	}, [getProduct, id])
	if (product === null) return <Spinner />
	return (
		<Fragment>
			<header className='dashboard-header'>
				<Navbar backgroundColor={'grey darken-3'} />
			</header>
			<section className='section section-product-details'>
				<br />
				<br />
				<br />
				<div className='container'>
					<div className='row'>
						<div className='col s12 m6 l5 center-align'>
							<img
								src={product.image.url}
								alt='product'
								className='responsive-img'
							/>
						</div>
						<div className='col s12 m6 l6 right'>
							<h3>{product.title}</h3>
							<div className='divider'></div>
							<h5>Price: {product.price}/sqft</h5>
							<br />
							<p className='lead'>{product.description}</p>
							<br />
							<div className='row'>
								<div className='col s12 m6 l5'>
									<ul className='pagination'>
										<li>
											<a href='# '>
												<i
													className='fad fa-chevron-left'
													onClick={() => {
														setAmount(amount - 1)
													}}
												></i>
											</a>
										</li>
										<li>
											<a href='# '>{amount}</a>
										</li>
										<li>
											<a href='# '>
												<i
													className='fad fa-chevron-right'
													onClick={() => {
														setAmount(amount + 1)
													}}
												></i>
											</a>
										</li>
									</ul>
								</div>
								<div className='col s12 m5 l4 right'>
									<input
										type='button'
										className='btn btn-large pink darken-2 waves-effect waves-light'
										value='Add To Cart'
										onClick={() => {
											const item = cart.find(item => item.id === id)
											if (item) {
												incrementAmount(id)
											} else {
												addToCart(product, amount)
												history.push('/cart')
											}
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
			</section>

			<Footer />
		</Fragment>
	)
}

const mapStateToProps = state => ({
	product: state.products.product,
	cart: state.cart.cart
})

export default connect(mapStateToProps, {
	getProduct,
	addToCart,
	incrementAmount
})(ProductDetails)
