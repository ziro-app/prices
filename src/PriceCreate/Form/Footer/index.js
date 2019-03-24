import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { container, secondary, primary } from './styles'

const Footer = ({ navigation, params, url, state }) => {
	const { labelSecondary, labelPrimary } = navigation.find(({ page }) => page === 'first')
	return (
		<div style={container}>
			<Link to={`/${params.supplier}`}>
				<input type='submit' style={secondary} value={labelSecondary} />
			</Link>
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