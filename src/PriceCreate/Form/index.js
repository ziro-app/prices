/* import libraries */
import React from 'react'
import PropTypes from 'prop-types'
/* import components */
import Questions from './Questions/index'
import Footer from './Footer/index'
import { body } from './styles'

const Form = ({ state, updateDropdown, params, url }) =>
	<div style={body}>
		<Questions params={params} url={url} state={state} updateDropdown={updateDropdown} />
		<Footer state={state} />
	</div>

Form.propTypes = {
	state: PropTypes.object.isRequired,
	updateDropdown: PropTypes.func.isRequired,
	params: PropTypes.object.isRequired,
	url: PropTypes.string.isRequired
}

export default Form