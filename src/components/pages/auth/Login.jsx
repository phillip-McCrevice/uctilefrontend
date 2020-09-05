import React, { useState, Fragment } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { Redirect, Link } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import { login } from '../../../actions/auth'
import { connect } from 'react-redux'

const Login = ({ auth: { isAuthenticated }, login }) => {
	const [form, setForm] = useState({
		email: '',
		password: ''
	})

	const { email, password } = form

	const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

	const onSubmit = e => {
		e.preventDefault()
		if (email === '' || password === '') {
			M.toast({ html: 'Please fill in all fields' })
		} else {
			login({ email, password })
			setForm({
				email: '',
				password: ''
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
							<h1>Login To Your Account</h1>
							<p>Dont have an account?</p>
							<Link className='btn btn-small pink darken-2' to='/signup'>
								Sign Up
							</Link>
						</div>
					</div>
				</div>
			</header>

			<section className='section section-signup'>
				<div className='container'>
					<div className='row'>
						<div className='col s12 m10 offset-m1 center'>
							<div className='card-panel grey lighten-4 grey-text text-darken-4 z-depth-0'>
								<form onSubmit={onSubmit}>
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

export default connect(mapStateToProps, { login })(Login)
