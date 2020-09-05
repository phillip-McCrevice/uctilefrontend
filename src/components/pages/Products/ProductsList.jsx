import React, { Fragment, useEffect } from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import ProductItem from './ProductItem'
import Spinner from '../../layout/Spinner'
import { getProducts } from '../../../actions/products'
import { connect } from 'react-redux'

const ProductsList = ({ products: { products, loading }, getProducts }) => {
	useEffect(() => {
		getProducts()
	}, [getProducts])

	return (
		<Fragment>
			<header className='main-header-inner'>
				<Navbar backgroundColor={'transparent'} />
				<div className='showcase container'>
					<div className='row'>
						<div className='col s12 m10 offset-m1 center'>
							<h1>Products</h1>
						</div>
					</div>
				</div>
			</header>
			<section className='section section-products'>
				<div className='container'>
					{products.length === 0 && loading ? (
						<Spinner />
					) : (
						<Fragment>
							<br />
							<br />
							<div className='row'>
								{products.map(product => (
									<ProductItem key={product._id} product={product} />
								))}
							</div>
							<br />
							<br />
						</Fragment>
					)}
				</div>
			</section>

			<Footer />
		</Fragment>
	)
}

const mapStateToProps = state => ({
	products: state.products
})

export default connect(mapStateToProps, { getProducts })(ProductsList)
