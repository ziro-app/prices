import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import getRenderVariables from '../../utils/getRenderVariables'
import { container, secondary, primary } from './styles'

const Footer = ({ state, updateIndex, updateClipboard, params: { product } }) => {
	const {
		labelSecondary, labelPrimary, back, forward, supplierIsValid, productIsValid, pageIndex, search
	} = getRenderVariables(state, product)
	if (product && (!supplierIsValid || !productIsValid))
		return null
	if (search && pageIndex === 1)
		return (
			<div style={container}>
				<Link to={forward} onClick={updateIndex.bind(null, 'next', supplierIsValid)}>
					<input type='submit' style={primary} value={labelPrimary} />
				</Link>
			</div>
		)
	return (
		<div style={container}>
			<Link to={back} onClick={pageIndex === 0 ? updateClipboard.bind(null, forward) : updateIndex.bind(null, 'prev', supplierIsValid)}>
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
	updateIndex: PropTypes.func.isRequired,
	updateClipboard: PropTypes.func.isRequired,
	params: PropTypes.object.isRequired
}

export default Footer