import React from 'react'
import { container, secondary, primary } from './styles'

const Footer = () => {
	return (
		<div style={container}>
			<input type='submit' style={secondary} value='Compartilhar' />
			<input type='submit' style={primary} value='Próximo' />
		</div>
	)
}

export default Footer