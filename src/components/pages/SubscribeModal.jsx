import React, { useState } from 'react'

const SubscribeModal = () => {
	const [email, setEmail] = useState('')

	const onChange = e => setEmail(e.target.value)

	const onSubmit = e => {
		e.preventDefault()
		if (email === '') {
			console.log('please enter your email')
		}
		console.log(email)
	}

	return (
		<div className='modal' id='subscribe-modal'>
			<div className='modal-content'>
				<h4>Subscribe To Our News Letter</h4>
				<p>Stay up to date with all the best offers</p>
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
					<input
						type='submit'
						value='Subscribe'
						className='btn btn-large pink darken-2 modal-action modal-close'
					/>
				</form>
			</div>
		</div>
	)
}

export default SubscribeModal
