import React from 'react'

const HomeAbout = () => {
	return (
		<section className='section section-about'>
			<div className='container'>
				<div className='row'>
					<div className='col s12 m6'>
						<h3>
							<span className='pink-text'>About</span> Us
						</h3>
						<p className='flow-text'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et in
							non quasi, cumque ut aut maxime consequatur. Similique,
							necessitatibus illo? Vero nulla nostrum praesentium modi nihil!
							Qui labore quibusdam aliquid.
						</p>
					</div>
					<div className='col s12 m6'>
						<img
							src={require('../../../assets/img/about.jpg')}
							alt='about'
							className='responsive-img circle'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeAbout
