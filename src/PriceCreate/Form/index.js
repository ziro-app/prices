/* import libraries */
import React from 'react'
import PropTypes from 'prop-types'
/* import components */
import Questions from './Questions/index'
import Footer from './Footer/index'
import { body } from './styles'

const Form = ({ state, updateDropdown }) =>
	<div style={body}>
		<Questions state={state} updateDropdown={updateDropdown} />
		<Footer navigation={[
			{ page: 'first', labelSecondary: 'Compartilhar', labelPrimary: 'Próximo' },
			{ page: 'middle', labelSecondary: 'Anterior', labelPrimary: 'Próximo' },
			{ page: 'last', labelSecondary: 'Anterior', labelPrimary: 'Enviar' }
		]} />
	</div>

Form.propTypes = {
	state: PropTypes.object.isRequired,
	updateDropdown: PropTypes.func.isRequired
}

export default Form