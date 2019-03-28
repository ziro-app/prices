/* import libraries */
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
/* import components */
import InputWrapper from './InputWrapper/index'
import Dropdown from '@ziro/dropdown'
import { input, container } from './styles'

export default class Questions extends Component {
	handleChange = ({ target: { value } }) => this.props.updateParent(value)
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
		return (
			<Fragment style={container}>
				{options.map((option, index) =>
					<div key={`${id}-${index}`}>
						<input type='radio' id={`${id}-${option}`} name={id} value={option} />
						<label htmlFor={`${id}-${option}`}>{option}</label>
					</div>
				)}
			</Fragment>
		)
	}
}

Questions.propTypes = {
	state: PropTypes.object.isRequired,
	updateDropdown: PropTypes.func.isRequired,
	url: PropTypes.string.isRequired
}