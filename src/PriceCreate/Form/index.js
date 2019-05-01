/* import libraries */
import React from 'react'
import PropTypes from 'prop-types'
/* import components */
import Questions from './Questions/index'
import Footer from './Footer/index'
import { body } from './styles'

const Form = ({ state, updateIndex, updateDropdown, updateQuestion, updateClipboard, updateErrorPrice, params, url }) =>
	<div style={body}>
		<Questions
			state={state}
			updateDropdown={updateDropdown}
			updateQuestion={updateQuestion}
			url={url}
			params={params}
		/>
		<Footer
			state={state}
			updateIndex={updateIndex}
			updateClipboard={updateClipboard}
			updateErrorPrice={updateErrorPrice}
			params={params}
		/>
	</div>

Form.propTypes = {
	state: PropTypes.object.isRequired,
	updateIndex: PropTypes.func.isRequired,
	updateDropdown: PropTypes.func.isRequired,
	updateQuestion: PropTypes.func.isRequired,
	updateClipboard: PropTypes.func.isRequired,
	updateErrorPrice: PropTypes.func.isRequired,
	url: PropTypes.string.isRequired,
	params: PropTypes.object.isRequired
}

export default Form