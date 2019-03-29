/* import libraries */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* import components */
import InputWrapper from './InputWrapper/index'
import Dropdown from '@ziro/dropdown'
import { input, container } from './styles'

export default class Questions extends Component {
	handleChange = (id, { target: { value } }) => this.props.updateQuestion(id, value)
	render = () => {
		const { uiState, suppliers, supplier, error_supplier, products, pageIndex } = this.props.state
		const updateDropdown = this.props.updateDropdown
		const url = this.props.url
		if (url === '/')
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
		const { name, type, options } = products[pageIndex]
		const id = `${name}-${type}`
		const question = this.props.state[id] === 'N/A' ? 'N/A' : parseFloat(this.props.state[id])
		const optionsList = [...options, 'N/A']
		return (
			<div style={container}>
				{optionsList.map((option, index) =>
					<div key={`${id}-${index}`}>
						<input
							type='radio'
							id={`${id}-${option}`}
							name={id}
							value={option}
							onChange={this.handleChange.bind(null, id)}
							checked={question === option}
						/>
						<label htmlFor={`${id}-${option}`}>{option}</label>
					</div>
				)}
			</div>
		)
	}
}

Questions.propTypes = {
	state: PropTypes.object.isRequired,
	updateDropdown: PropTypes.func.isRequired,
	updateQuestion: PropTypes.func.isRequired,
	url: PropTypes.string.isRequired
}