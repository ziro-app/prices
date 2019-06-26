import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import getRenderVariables from '../../utils/getRenderVariables'
import Submit from '../Submit/index'
import { containerOne, containerTwo, secondary, primary } from './styles'

const Footer = ({ state, updateIndex, updateClipboard, updateErrorPrice, submitForm, params: { product } }) => {
	const {
		labelSecondary, labelPrimary, back, forward, supplierIsValid, productIsValid, pageIndex,
		search, priceIsValid, numberOfProducts
	} = getRenderVariables(state, product)
	if (product && (!supplierIsValid || !productIsValid))
		return null
	if (search && pageIndex === 1)
		return (
			<div style={containerOne}>
				<Link to={priceIsValid ? forward : search ? '?lock=true' : '#'} onClick={priceIsValid ? updateIndex.bind(null, 'next', supplierIsValid) : updateErrorPrice}>
					<input type='submit' style={primary} value={labelPrimary} />
				</Link>
			</div>
		)
	if (pageIndex > 0 && !priceIsValid)
		return (
			<div style={containerTwo}>
				<Link style={{ overflow: 'hidden' }} to={back} onClick={pageIndex === 0 ? updateClipboard.bind(null, forward) : updateIndex.bind(null, 'prev', supplierIsValid)}>
					<input type='submit' style={secondary} value={labelSecondary} />
				</Link>
				<Link to={search ? '?lock=true' : '#'} onClick={updateErrorPrice}>
					<input type='submit' style={primary} value={labelPrimary} />
				</Link>
			</div>
		)
	return (
		<div style={containerTwo}>
			<Link style={{ overflow: 'hidden' }} to={back} onClick={pageIndex === 0 ? updateClipboard.bind(null, forward) : updateIndex.bind(null, 'prev', supplierIsValid)}>
				<input type='submit' style={secondary} value={labelSecondary} />
			</Link>
			{pageIndex === numberOfProducts - 1
				?
					<Submit uiState={state.uiState} submitForm={submitForm} />
				:
					<Link to={search ? '?lock=true' : forward} onClick={updateIndex.bind(null, 'next', supplierIsValid)}>
						<input type='submit' style={primary} value={labelPrimary} />
					</Link>
			}
		</div>
	)
}

Footer.propTypes = {
	state: PropTypes.object.isRequired,
	updateIndex: PropTypes.func.isRequired,
	updateClipboard: PropTypes.func.isRequired,
	updateErrorPrice: PropTypes.func.isRequired,
	submitForm: PropTypes.func.isRequired,
	params: PropTypes.object.isRequired
}

export default Footer