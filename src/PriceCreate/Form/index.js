/* import libraries */
import React from 'react'
import PropTypes from 'prop-types'
/* import components */
import Questions from './Questions/index'
import Footer from './Footer/index'
import { body } from './styles'

const Form = ({ state, updateIndex, updateDropdown, url }) =>
	<div style={body}>
		<Questions state={state} updateDropdown={updateDropdown} url={url} />
		<Footer state={state} updateIndex={updateIndex} />
	</div>

Form.propTypes = {
	state: PropTypes.object.isRequired,
	updateIndex: PropTypes.func.isRequired,
	updateDropdown: PropTypes.func.isRequired,
	url: PropTypes.string.isRequired
}

export default Form