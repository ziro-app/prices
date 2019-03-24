import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { container, secondary, primary } from './styles'

const Footer = ({ state: { supplier, products, pageIndex }, updateIndex }) => {
	const labelSecondary = pageIndex === 0 ? 'Compartilhar' : 'Anterior'
	const labelPrimary = pageIndex === products.length - 1 ? 'Enviar' : 'Próximo'
	const { prev, next } = products[pageIndex]
	const prevLink = prev ? `/${supplier}/${prev}` : '/'
	const nextLink = next ? `/${supplier}/${next}` : '#'
	return (
		<div style={container}>
			<Link to={pageIndex === 0 ? '#' : prevLink} onClick={updateIndex.bind(null, 'prev')}>
				<input type='submit' style={secondary} value={labelSecondary} />
			</Link>
			<Link to={nextLink} onClick={updateIndex.bind(null, 'next')}>
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