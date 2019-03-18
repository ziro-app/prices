import React from 'react'
import { Image } from 'cloudinary-react'
import { container } from './styles'

const NotFound = () =>
	<div style={container}>
	    <Image
			cloudName='ziro'
			width='45'
			publicId='logo-round_kxn8sa'
			version='1508000699'
			format='png'
			secure='true'
			alt='logo'
	    />
		<p>Essa página não existe</p>
		<p>Verifique a URL digitada</p>
	</div>

export default NotFound