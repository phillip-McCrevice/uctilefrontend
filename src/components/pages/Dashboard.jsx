import React, { Fragment, useEffect } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'

const Dashboard = ({ user }) => {
	useEffect(() => {
		M.toast({ html: `Welcome back ${user.username}` })
	}, [user])
	return (
		<Fragment>
			<header className='dashboard-header'>
				<Navbar backgroundColor={'grey darken-3'} />
			</header>

			<section className='section section-dashboard'>
				<div className='container'>
					<div className='row'>
						<div className='col s12'>
							<h4>My Account</h4>
							<div className='divider'></div>
						</div>
					</div>
					<br />
					<br />
					<div className='row'>
						<div className='col m4 l3 hide-on-small-and-down'>
							<h6>
								Account Info{' '}
								<span className='right'>
									<a href='# '>
										<i className='fad fa-plus pink-text text-darken-1'></i>
									</a>
								</span>
							</h6>
							<div className='divider'></div>
							<h6>
								Orders{' '}
								<span className='right'>
									<a href='# '>
										<i className='fad fa-plus pink-text text-darken-1'></i>
									</a>
								</span>
							</h6>
							<div className='divider'></div>
							<h6>
								Settings{' '}
								<span className='right'>
									<a href='# '>
										<i className='fad fa-plus pink-text text-darken-1'></i>
									</a>
								</span>
							</h6>
						</div>
						<div className='col s12 m8 l8 offset-l1'>
							<div className='card'>
								<div className='card-content'>
									<span className='card-title'>
										Orders{' '}
										<i
											className='fad fa-dolly'
											style={{ marginLeft: '5px' }}
										></i>
									</span>
									<p>View previous orders &amp; quotes</p>
								</div>
								<div className='card-action'>
									<a href='/'>Order History</a>
									<a href='/'>Quotes</a>
								</div>
							</div>
							<div className='card'>
								<div className='card-content'>
									<span className='card-title'>
										Settings{' '}
										<i
											className='fad fa-user-cog'
											style={{ marginLeft: '5px' }}
										></i>
									</span>
									<p>Edit account settings</p>
								</div>
								<div className='card-action'>
									<a href='/'>Billing Address</a>
									<a href='/'>Shipping Address</a>
									<a href='/'>Account Info</a>
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
	user: state.auth.user
})

export default connect(mapStateToProps)(Dashboard)
