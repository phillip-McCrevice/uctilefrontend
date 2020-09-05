import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart, incrementAmount } from '../../../actions/cart'
import { useHistory } from 'react-router-dom'

const ProductItem = ({ product, cart, addToCart, incrementAmount }) => {
	const history = useHistory()
	return (
		<Fragment>
			<div className='col s12 m6 l3'>
				<div className='card small'>
					<div className='card-image'>
						<img
							src={product.image.url}
							alt='product'
							className='responsive-img'
						/>
					</div>
					<div className='card-content'>
						<h6 style={{ padding: '5px' }}>{product.title}</h6>
						<Link to={`/details/${product._id}`}>Details</Link>
						<a
							href='# '
							className='right cart-action'
							onClick={() => {
								const item = cart.find(item => item._id === product._id)
								if (item) {
									incrementAmount(product._id)
								} else {
									addToCart(product, 1)
									history.push('/cart')
								}
							}}
						>
							Add To Cart
						</a>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

const mapStateToProps = state => ({
	cart: state.cart.cart
})

export default connect(mapStateToProps, { addToCart, incrementAmount })(
	ProductItem
)
