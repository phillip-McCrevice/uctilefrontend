import React, { Fragment } from 'react'
import HomeTestimonials from './HomeTestimonials'
import HomeNewsLetter from './HomeNewsLetter'
import HomeDesigners from './HomeDesigners'
import HomeDisplay from './HomeDisplay'
import MainHeader from '../../layout/MainHeader'
import HomeIcons from './HomeIcons'
import HomeAbout from './HomeAbout'
import Footer from '../../layout/Footer'

const Home = () => {
	return (
		<Fragment>
			<MainHeader />
			<HomeIcons />
			<HomeAbout />
			<HomeDesigners />
			<HomeDisplay />
			<HomeNewsLetter />
			<HomeTestimonials />
			<Footer />
		</Fragment>
	)
}

export default Home
