/* import libraries */
import React from 'react'
/* import components */
import InputWrapper from './InputWrapper/index'
import Dropdown from '@ziro/dropdown'
import { input } from './styles'

const Questions = ({ state, updateDropdown }) => {
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

export default Questions