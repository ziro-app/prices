/* import libraries */
import React from 'react'
import PropTypes from 'prop-types'
/* import components */
import InputWrapper from './InputWrapper/index'
import Dropdown from '@ziro/dropdown'
import Footer from './Footer/index'
import { body, input } from './styles'

const Form = ({ state, updateDropdown }) => {
	const { uiState, suppliers, supplier, error_supplier } = state
	return (
		<div style={body}>
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
			<Footer />
		</div>
	)
}

Form.propTypes = {
	state: PropTypes.object.isRequired,
	updateDropdown: PropTypes.func.isRequired
}

export default Form