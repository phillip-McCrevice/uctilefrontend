import React, { useState, Fragment } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { Redirect, Link } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import { register } from '../../../actions/auth'
import { connect } from 'react-redux'

const Signup = ({ auth: { isAuthenticated }, register }) => {
	const [form, setForm] = useState({
		username: '',
		email: '',
		password: '',
		password2: ''
	})

	const { username, email, password, password2 } = form

	const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

	const onSubmit = e => {
		e.preventDefault()
		if (
			username === '' ||
			email === '' ||
			password === '' ||
			password2 === ''
		) {
			M.toast({ html: 'Please fill in all fields' })
		} else if (password !== password2) {
			M.toast({ html: 'Passwords do not match' })
		} else {
			register({ username, email, password })
			setForm({
				username: '',
				email: '',
				password: '',
				password2: ''
			})
		}
	}

	if (isAuthenticated) {
		return <Redirect to='/dashboard' />
	}

	return (
		<Fragment>
			<header className='main-header-inner'>
				<Navbar backgroundColor={'transparent'} />
				<div className='showcase container'>
					<div className='row'>
						<div className='col s12 m10 offset-m1 center'>
							<h1>Create your account</h1>
							<p>already have an account?</p>
							<Link className='btn btn-small pink darken-2' to='/login'>
								Login
							</Link>
						</div>
					</div>
				</div>
			</header>

			<section className='section section-signup'>
				<div className='container'>
					<div className='row'>
						<div className='col s12 m6'>
							<h4>Free to sign up</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
								repellat?
							</p>
							<h4>Access special offers</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
								dolorem.
							</p>
							<h4>Premium Shipping</h4>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Perferendis, provident.
							</p>
						</div>
						<div className='col s12 m6'>
							<div className='card-panel grey lighten-4 grey-text text-darken-4 z-depth-0'>
								<form onSubmit={onSubmit}>
									<div className='input-field'>
										<input
											type='text'
											name='username'
											id='username'
											onChange={onChange}
											value={username}
										/>
										<label htmlFor='username'>Username</label>
									</div>
									<div className='input-field'>
										<input
											type='email'
											name='email'
											id='email'
											onChange={onChange}
											value={email}
										/>
										<label htmlFor='email'>Email</label>
									</div>
									<div className='input-field'>
										<input
											type='password'
											name='password'
											id='password'
											onChange={onChange}
											value={password}
										/>
										<label htmlFor='password'>Password</label>
									</div>
									<div className='input-field'>
										<input
											type='password'
											name='password2'
											id='password2'
											onChange={onChange}
											value={password2}
										/>
										<label htmlFor='password2'>Confirm Password</label>
									</div>
									<input
										type='submit'
										value='Sign Up'
										className='btn pink darken-2'
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</Fragment>
	)
}

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(mapStateToProps, { register })(Signup)
