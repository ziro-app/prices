import React from 'react'
import PropTypes from 'prop-types'
import { container, secondary, primary } from './styles'

const Footer = ({ navigation, params, url }) => {
	const pageToRender = url === '/' ? 'first' : 'middle'
	const { labelSecondary, labelPrimary } = navigation.find(({ page }) => page === pageToRender)
	return (
		<div style={container}>
			<input type='submit' style={secondary} value={labelSecondary} />
			<input type='submit' style={primary} value={labelPrimary} />
		</div>
	)
}

Footer.propTypes = {
	navigation: PropTypes.array.isRequired,
	params: PropTypes.object.isRequired,
	url: PropTypes.string.isRequired
}

export default Footer