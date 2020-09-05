import React from 'react'

const HomeNewsLetter = () => {
	return (
		<section className='section section-newsletter white-text'>
			<div className='primary-overlay valign-wrapper'>
				<div className='container'>
					<div className='row'>
						<div className='col s12 m8'>
							<h4 className='flow-text'>
								Subscribe To Our Newsletter For Special Offers
							</h4>
						</div>
						<div className='col s12 m4'>
							<a
								href='#subscribe-modal'
								className='btn btn-large waves-effect waves-light pink darken-2 modal-trigger'
							>
								<i className='fad fa-envelope-open'></i> Subscribe
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeNewsLetter
