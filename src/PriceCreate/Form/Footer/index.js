import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import getRenderVariables from '../../utils/getRenderVariables'
import { container, secondary, primary } from './styles'

const Footer = ({ state, updateIndex }) => {
	const { labelSecondary, labelPrimary, back, forward, supplierIsValid } = getRenderVariables(state)
	return (
		<div style={container}>
			<Link to={back} onClick={updateIndex.bind(null, 'prev', supplierIsValid)}>
				<input type='submit' style={secondary} value={labelSecondary} />
			</Link>
			<Link to={forward} onClick={updateIndex.bind(null, 'next', supplierIsValid)}>
				<input type='submit' style={primary} value={labelPrimary} />
			</Link>
		</div>
	)
}

Footer.propTypes = {
	state: PropTypes.object.isRequired,
	updateIndex: PropTypes.func.isRequired
}

export default Footer