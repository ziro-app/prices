import React from 'react'
import InputWrapper from '../InputWrapper/index'
import Dropdown from '@ziro/dropdown'
import { input } from './styles'

const InitialQuestion = ({ state: { uiState, error_supplier, suppliers, supplier }, updateDropdown }) =>
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

export default InitialQuestion