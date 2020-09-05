import React, { useRef, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { Link } from 'react-router-dom'

const HomeTestimonials = () => {
	const carousel = useRef(null)

	useEffect(() => {
		M.Carousel.init(carousel, { fullWidth: true })
	}, [])

	return (
		<section className='section section-testimonial grey lighten-4'>
			<div className='container'>
				<h4>See What Our Customers Have To Say...</h4>
				<div className='row'>
					<div className='col s12'>
						<div className='carousel carousel-slider center' ref={carousel}>
							<div className='carousel-item' href='#one!'>
								<h2>Testimonial 1</h2>
								<p className='flow-text'>
									"Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Labore perferendis omnis maiores voluptatem rem beatae ipsa
									delectus officiis odit fugiat ad consequatur nulla minus animi
									placeat, ea architecto excepturi aspernatur.p"
									<span>
										<em>- John Doe From MicroSystems</em>
									</span>
								</p>
								<div className='carousel-fixed-item center hide-on-small-and-down'>
									<Link to='/' className='btn pink darken-2'>
										Read More
									</Link>
								</div>
							</div>
							<div className='carousel-item' href='#two!'>
								<h2>Testimonial 2</h2>
								<p className='flow-text'>
									"Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Labore perferendis omnis maiores voluptatem rem beatae ipsa
									delectus officiis odit fugiat ad consequatur nulla minus animi
									placeat, ea architecto excepturi aspernatur.p"
									<span>
										<em>- Mike Smith From Edge INC</em>
									</span>
								</p>
								<div className='carousel-fixed-item center hide-on-small-and-down'>
									<Link
										to='/'
										className='btn waves-effect waves-light pink darken-2'
									>
										Read More
									</Link>
								</div>
							</div>
							<div className='carousel-item' href='#three!'>
								<h2>Testimonial 3</h2>
								<p className='flow-text'>
									"Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Labore perferendis omnis maiores voluptatem rem beatae ipsa
									delectus officiis odit fugiat ad consequatur nulla minus animi
									placeat, ea architecto excepturi aspernatur.p"
									<span>
										<em>- Some Foolio</em>
									</span>
								</p>
								<div className='carousel-fixed-item center hide-on-small-and-down'>
									<Link
										to='/'
										className='btn waves-effect waves-light pink darken-2'
									>
										Read More
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeTestimonials
