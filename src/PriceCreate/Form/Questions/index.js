/* import libraries */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* import utils */
import { optionIsValid, objectIsValid } from '../../utils/validateFields'
/* import components */
import InitialQuestion from './InitialQuestion/index'
import RemainingQuestions from './RemainingQuestions/index'
import { invalid } from './styles'

export default class Questions extends Component {
	render = () => {
		const { suppliers, supplier, products, pageIndex } = this.props.state
		const { product } = this.props.params
		const { name, type, options } = products[pageIndex]
		const id = `${name}-${type}`
		const content = this.props.state[id]
		const question = content === 'N/A' ? 'N/A' : content
		const optionsList = [...options, 'N/A']
		const supplierIsValid = optionIsValid(suppliers, supplier)
		const productIsValid = objectIsValid(products, product)
		const url = this.props.url
		if (url === '/')
			return <InitialQuestion state={this.props.state} updateDropdown={this.props.updateDropdown} />
		if (!supplierIsValid)
			return <div style={invalid}>Fabricante inválido <br/> Verifique URL digitada</div>
		if (!productIsValid)
			return <div style={invalid}>Produto inválido <br/> Verifique URL digitada</div>
		return <RemainingQuestions type={type} options={optionsList} id={id} updateQuestion={this.props.updateQuestion} question={question} />
	}
}

Questions.propTypes = {
	state: PropTypes.object.isRequired,
	updateDropdown: PropTypes.func.isRequired,
	updateQuestion: PropTypes.func.isRequired,
	params: PropTypes.object.isRequired,
	url: PropTypes.string.isRequired
}