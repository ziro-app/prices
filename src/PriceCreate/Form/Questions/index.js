/* import libraries */
import React from 'react'
import PropTypes from 'prop-types'
/* import components */
import InputWrapper from './InputWrapper/index'
import Dropdown from '@ziro/dropdown'
import { input } from './styles'

const Questions = ({ state, updateDropdown, params, url }) => {
	const { uiState, suppliers, supplier, error_supplier, products } = state
	return (
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
	)
}

Questions.propTypes = {
	state: PropTypes.object.isRequired,
	updateDropdown: PropTypes.func.isRequired,
	params: PropTypes.object.isRequired,
	url: PropTypes.string.isRequired
}

export default Questions