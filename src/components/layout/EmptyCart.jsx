import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
	return (
		<section className='section section-empty-cart'>
			<div className='container'>
				<div className='row'>
					<div className='col s12'>
						<h3 className='center'>Your Cart Is Empty</h3>
						<div className='divider'></div>
					</div>
				</div>
				<div className='row'>
					<div className='col s12'>
						<Link
							to='/products'
							className='btn btn-extend pink darken-2 center'
						>
							Shop
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default EmptyCart
