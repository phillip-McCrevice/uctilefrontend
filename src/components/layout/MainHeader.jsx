import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const MainHeader = () => {
	return (
		<header className='main-header'>
			<Navbar backgroundColor={'transparent'} />
			<div className='showcase container'>
				<div className='row'>
					<div className='col s12 m10 offset-m1 center'>
						<h5>Welcome To Unique Custom Tile</h5>
						<h1>Make Your Projects Stand Above The Rest</h1>
						<p>We Build The Custom Tiles And Patterns Your Project Needs</p>
						<br />
						<br />
						<Link
							to='/solutions'
							className='btn btn-large white pink-text waves-effect waves-dark'
							style={{ marginRight: '5px' }}
						>
							Learn More
						</Link>
						<Link
							to='/signup'
							className='btn btn-large pink darken-2 white-text waves-effect waves-light'
						>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default MainHeader
