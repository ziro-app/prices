/* import libraries */
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
/* import utils */
import { optionIsValid, objectIsValid } from '../../utils/validateFields'
/* import components */
import InitialQuestion from './InitialQuestion/index'
import { invalid, container, subtitle, radioSelected, radioNotSelected } from './styles'

export default class Questions extends Component {
	handleChange = (id, { target: { value } }) => this.props.updateQuestion(id, value)
	render = () => {
		const { uiState, suppliers, supplier, error_supplier, products, pageIndex } = this.props.state
		const updateDropdown = this.props.updateDropdown
		const url = this.props.url
		const { product } = this.props.params
		const supplierIsValid = optionIsValid(suppliers, supplier)
		const productIsValid = objectIsValid(products, product)
		if (url === '/')
			return <InitialQuestion state={this.props.state} updateDropdown={this.props.updateDropdown} />
		if (!supplierIsValid)
			return <div style={invalid}>Fabricante inválido <br/> Verifique URL digitada</div>
		if (!productIsValid)
			return <div style={invalid}>Produto inválido <br/> Verifique URL digitada</div>
		const { name, type, options } = products[pageIndex]
		const id = `${name}-${type}`
		const question = this.props.state[id] === 'N/A' ? 'N/A' : parseFloat(this.props.state[id])
		const optionsList = [...options, 'N/A']
		return (
			<Fragment>
				<div style={subtitle}>
					Qual o {type === 'min' ? 'MENOR' : 'MAIOR'} preço deste produto?
				</div>
				<div style={container}>
					{optionsList.map((option, index) =>
						<div key={`${id}-${index}`}>
							<input
								style={{ 'display': 'none' }}
								type='radio'
								id={`${id}-${option}`}
								name={id}
								value={option}
								onChange={this.handleChange.bind(null, id)}
								checked={question === option}
							/>
							<label
								style={question === option ? radioSelected : radioNotSelected}
								htmlFor={`${id}-${option}`}
							>
								{option}
							</label>
						</div>
					)}
				</div>
			</Fragment>
		)
	}
}

Questions.propTypes = {
	state: PropTypes.object.isRequired,
	updateDropdown: PropTypes.func.isRequired,
	updateQuestion: PropTypes.func.isRequired,
	params: PropTypes.object.isRequired,
	url: PropTypes.string.isRequired
}