import React, { useRef, useEffect, Fragment } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

const Solutions = () => {
	const tabs = useRef(null)

	useEffect(() => {
		M.Tabs.init(tabs)
	}, [])

	return (
		<Fragment>
			<header className='main-header-inner'>
				<Navbar backgroundColor={'transparent'} />
				<div className='showcase container'>
					<div className='row'>
						<div className='col s12 m10 offset-m1 center'>
							<h1>Design Solutions</h1>
						</div>
					</div>
				</div>
			</header>

			<section className='section section-solutions-about'>
				<div className='container'>
					<div className='row'>
						<div className='col s12 m5'>
							<h2>What We Do...</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
								odit soluta, incidunt doloribus eligendi tenetur aliquid
								delectus fuga voluptate officia adipisci porro at, molestiae
								eaque. Rem commodi corrupti ipsam quaerat.
							</p>
						</div>
						<div className='col s12 m6 offset-m1'>
							<div className='row'>
								<div className='col s12'>
									<ul className='tabs' ref={tabs}>
										<li className='tab col s4'>
											<a href='#tab1' className='pink-text'>
												Your Designs
											</a>
										</li>
										<li className='tab col s4'>
											<a href='#tab2' className='pink-text'>
												Precision Technology
											</a>
										</li>
										<li className='tab col s4'>
											<a href='#tab3' className='pink-text'>
												Affordable Pricing
											</a>
										</li>
									</ul>
								</div>
								<div className='col s12' id='tab1'>
									<h5>Your Designs</h5>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Velit minus fugit architecto illum rem molestiae adipisci
										deleniti suscipit quibusdam sit.
									</p>
								</div>
								<div className='col s12' id='tab2'>
									<h5>Precision Technology</h5>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Fugit delectus eos sunt ipsa cum esse amet tenetur culpa
										nesciunt laborum!
									</p>
								</div>
								<div className='col s12' id='tab3'>
									<h5>Affordable Pricing</h5>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Officiis distinctio exercitationem assumenda sed sapiente
										consequatur quidem, corrupti reprehenderit temporibus
										facilis!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='section section-features grey lighten-3'>
				<div className='container'>
					<h4 className='pink-text text-darken-1 center'>
						Beautiful Custom Finishes
					</h4>
					<h6 className='grey-text text-darken-2 center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
						delectus?
					</h6>
					<br />
					<br />
					<div className='row'>
						<div className='col s12 m4'>
							<h5>
								<i className='fad fa-album-collection'></i> Best Quality
								Products
							</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
								illum et architecto consequatur perferendis eum quam deserunt
								hic impedit omnis!
							</p>
						</div>
						<div className='col s12 m4'>
							<h5>
								<i className='fad fa-history'></i> Order History
							</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
								illum et architecto consequatur perferendis eum quam deserunt
								hic impedit omnis!
							</p>
						</div>
						<div className='col s12 m4'>
							<h5>
								<i className='fad fa-hammer'></i> Easy To Install
							</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
								illum et architecto consequatur perferendis eum quam deserunt
								hic impedit omnis!
							</p>
						</div>
					</div>
					<div className='row'>
						<div className='col s12 m4'>
							<h5>
								<i className='fad fa-user-headset'></i> Helpful Customer Service
							</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
								illum et architecto consequatur perferendis eum quam deserunt
								hic impedit omnis!
							</p>
						</div>
						<div className='col s12 m4'>
							<h5>
								<i className='fad fa-sack-dollar'></i> Special Offers
							</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
								illum et architecto consequatur perferendis eum quam deserunt
								hic impedit omnis!
							</p>
						</div>
						<div className='col s12 m4'>
							<h5>
								<i className='fad fa-badge-dollar'></i> Secure Checkout
							</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
								illum et architecto consequatur perferendis eum quam deserunt
								hic impedit omnis!
							</p>
						</div>
					</div>
					<div className='center'>
						<Link
							to='/signup'
							className='btn btn-large pink darken-2 waves-effect waves-light'
						>
							Sign Up For Free
						</Link>
						<br />
						<br />
						<h5>
							<span className='pink-text text-lighten-1'>Have a question?</span>
							Contact our sales team
						</h5>
						<p>sales@uctile.com</p>
					</div>
				</div>
			</section>

			<Footer />
		</Fragment>
	)
}

export default Solutions
