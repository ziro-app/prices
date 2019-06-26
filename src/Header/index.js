import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'cloudinary-react'
import { container, description, sub } from './styles'

const Header = ({ title, subtitle, children }) =>
	<div style={container}>
	    <Image
			cloudName='ziro'
			width='35'
			publicId='logo-app_fwothv'
			version='1561160634'
			format='png'
			secure='true'
			alt='logo'
	    />
		<h1 style={description}>{title}</h1>
		<span style={sub}>{subtitle}</span>
		{children}
	</div>

Header.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}

export default Header