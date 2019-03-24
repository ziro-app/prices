import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { optionIsValid } from '../../utils/validateFields'
import { container, secondary, primary } from './styles'

const Footer = ({ state: { supplier, suppliers, products, pageIndex }, updateIndex }) => {
	const supplierIsValid = optionIsValid(suppliers, supplier)
	const labelSecondary = pageIndex === 0 ? 'Compartilhar' : 'Anterior'
	const labelPrimary = pageIndex === products.length - 1 ? 'Enviar' : 'Próximo'
	const { prev, next } = products[pageIndex]
	const prevLink = prev ? `/${supplier}/${prev}` : '/'
	const nextLink = next ? `/${supplier}/${next}` : '#'
	const back = pageIndex === 0 || !supplierIsValid ? '#' : prevLink
	const forward = supplierIsValid ? nextLink : '#'
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