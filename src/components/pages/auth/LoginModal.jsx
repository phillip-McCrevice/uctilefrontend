import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../../actions/auth'

const LoginModal = ({ auth: { isAuthenticated }, login }) => {
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
		<div className='modal' id='login-modal'>
			<div className='modal-content'>
				<h4 className='grey-text'>Account Login</h4>
				<p className='grey-text'>Login to access your account dashboard</p>
				<form onSubmit={onSubmit}>
					<div className='input-field'>
						<input
							type='email'
							name='email'
							value={email}
							onChange={onChange}
						/>
						<label htmlFor='email'>Email</label>
					</div>
					<div className='input-field'>
						<input
							type='password'
							name='password'
							value={password}
							onChange={onChange}
						/>
						<label htmlFor='password'>Password</label>
					</div>
					<button
						type='submit'
						className='modal-action modal-close btn pink darken-2'
						style={{ margin: '0 5px' }}
					>
						<i className='fad fa-lock'></i> Login
					</button>
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(mapStateToProps, { login })(LoginModal)
