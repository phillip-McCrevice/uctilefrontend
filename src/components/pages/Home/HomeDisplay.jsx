import React from 'react'

const HomeDisplay = () => {
	return (
		<section className='section section-display grey lighten-4'>
			<div className='container'>
				<div className='row'>
					<h4 className='center'>
						We Work With <span className='pink-text'>Any Design</span>
					</h4>
					<br />
					<br />
					<div className='row'>
						<div className='col s2'>
							<img
								src={require('../../../assets/img/shit1.jpg')}
								alt='shit'
								className='responsive-img'
							/>
						</div>
						<div className='col s2'>
							<img
								src={require('../../../assets/img/shit2.jpg')}
								alt='shit'
								className='responsive-img'
							/>
						</div>
						<div className='col s2'>
							<img
								src={require('../../../assets/img/shit3.jpg')}
								alt='shit'
								className='responsive-img'
							/>
						</div>
						<div className='col s2'>
							<img
								src={require('../../../assets/img/shit4.jpg')}
								alt='shit'
								className='responsive-img'
							/>
						</div>
						<div className='col s2'>
							<img
								src={require('../../../assets/img/shit5.jpg')}
								alt='shit'
								className='responsive-img'
							/>
						</div>
						<div className='col s2'>
							<img
								src={require('../../../assets/img/shit6.jpg')}
								alt='shit'
								className='responsive-img'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeDisplay
