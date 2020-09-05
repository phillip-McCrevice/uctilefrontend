import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
	removeFromCart,
	incrementAmount,
	decrementAmount
} from '../../../actions/cart'

const CartItem = ({
	item,
	removeFromCart,
	incrementAmount,
	decrementAmount
}) => {
	return (
		<Fragment>
			<div className='card horizontal small' style={{ padding: '20px 0' }}>
				<div className='card-image'>
					<img
						src={item.image.url}
						alt='cart item'
						className='responsive-img'
					/>
				</div>
				<div className='card-stacked'>
					<div className='card-content'>
						<a
							href='# '
							className='btn right transparent'
							onClick={() => {
								removeFromCart(item._id)
							}}
						>
							{' '}
							<i className='fad fa-trash'></i>
						</a>
						<h5>Product: {item.title}</h5>

						<div className='divider'></div>
						<br />
						<h6 className='right'>Total Price Per Sqft: ${item.price}</h6>
						<ul className='pagination'>
							Quantity
							<li>
								<a href='# '>
									<i
										className='fad fa-chevron-left'
										onClick={() => {
											if (item.amount === 1) {
												removeFromCart(item._id)
											} else {
												decrementAmount(item._id)
											}
										}}
									></i>
								</a>
							</li>
							<li>
								<a href='# '>{item.amount}</a>
							</li>
							<li>
								<a href='# '>
									<i
										className='fad fa-chevron-right'
										onClick={() => {
											incrementAmount(item._id)
										}}
									></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default connect(null, {
	removeFromCart,
	incrementAmount,
	decrementAmount
})(CartItem)
