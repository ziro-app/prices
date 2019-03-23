import React from 'react'
import { container, secondary, primary } from './styles'

const Footer = ({ navigation }) => {
	const { labelSecondary, labelPrimary } = navigation.find(({ page }) => page === 'first')
	return (
		<div style={container}>
			<input type='submit' style={secondary} value={labelSecondary} />
			<input type='submit' style={primary} value={labelPrimary} />
		</div>
	)
}

export default Footer