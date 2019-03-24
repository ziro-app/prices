import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { container, secondary, primary } from './styles'

const Footer = ({ state: { supplier, products, pageIndex }, updateIndex }) => {
	const { prev, next } = products[pageIndex]
	const labelSecondary = prev ? 'Anterior' : 'Compartilhar'
	const labelPrimary = next ? 'Próximo' : 'Enviar'
	let prevLink
	if (pageIndex === 0)
		prevLink = 'share-url' /* add later */
	else
		prevLink = prev ? `/${supplier}/${prev}` : '/'
	const nextLink = next ? `/${supplier}/${next}` : '#'
	return (
		<div style={container}>
			<Link to={prevLink} onClick={updateIndex.bind(null, 'prev')}>
				<input type='submit' style={secondary} value={labelSecondary} />
			</Link>
			<Link to={nextLink} onClick={updateIndex.bind(null, 'next')}>
				<input type='submit' style={primary} value={labelPrimary} />
			</Link>
		</div>
	)
}

Footer.propTypes = {
	state: PropTypes.object.isRequired
}

export default Footer