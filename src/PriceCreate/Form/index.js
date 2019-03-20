/* import libraries */
import React from 'react'
import PropTypes from 'prop-types'
/* import components */
import Dropdown from '@ziro/dropdown'
import { body, input, subtitle, name } from './styles'

const Form = ({ state, updateDropdown }) => {
	const { uiState, suppliers, supplier, error_supplier } = state
	return (
		<div style={body}>
			<div style={subtitle}>Fabricante: <span style={name}>Nome</span></div>
			{/*---------------------------SUPPLIER-------------------------*/}
			<InputWrapper uiState={uiState} errorMessage={error_supplier}
				render={() => (
					<Dropdown
						name='supplier'
						placeholder='Fabricante'
						options={suppliers}
						value={supplier}
						updateParent={updateDropdown}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={supplier}
						disabled={true}
					/>
				)}
			/>
		</div>
	)
}

Form.propTypes = {
	state: PropTypes.object.isRequired,
	updateDropdown: PropTypes.func.isRequired
}

export default Form