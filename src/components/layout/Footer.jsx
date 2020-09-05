import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='page-footer grey darken-1'>
			<div className='container'>
				<div className='row'>
					<div className='col l6 s12'>
						<h5 className='white-text'>Follow Us On Social Media</h5>
						<ul className='social'>
							<li>
								<a href='/'>
									<i className='fab fa-facebook fa-2x'></i>
								</a>
							</li>
							<li>
								<a href='/'>
									<i className='fab fa-instagram fa-2x'></i>
								</a>
							</li>
							<li>
								<a href='/'>
									<i className='fab fa-twitter fa-2x'></i>
								</a>
							</li>
							<li>
								<a href='/'>
									<i className='fab fa-snapchat fa-2x'></i>
								</a>
							</li>
						</ul>
						<p className='grey-text text-lighten-4'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
							laudantium optio ea. Explicabo cupiditate voluptate architecto
							dolorem saepe?
						</p>
					</div>
					<div className='col l4 offset-l2 s12'>
						<h5 className='white-text'>Links</h5>
						<div className='divider'></div>
						<ul>
							<li>
								<Link className='grey-text text-lighten-3' to='/'>
									Home
								</Link>
							</li>
							<li>
								<Link className='grey-text text-lighten-3' to='/solutions'>
									Solutions
								</Link>
							</li>
							<li>
								<Link className='grey-text text-lighten-3' to='/products'>
									Products
								</Link>
							</li>
							<li>
								<Link className='grey-text text-lighten-3' to='/signup'>
									Sign Up
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='footer-copyright grey'>
				<div className='container pink-text'>
					Unique Custom Tile Co. Copyright &copy; 2020
					<a className='pink-text right' href='/'>
						Terms &amp; Conditions
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
