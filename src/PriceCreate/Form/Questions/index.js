/* import libraries */
import React from 'react'
import PropTypes from 'prop-types'
/* import utils */
import { optionIsValid, objectIsValid } from '../../utils/validateFields'
/* import components */
import InitialQuestion from './InitialQuestion/index'
import RemainingQuestions from './RemainingQuestions/index'
import { invalid } from './styles'

const Questions = ({ state, updateDropdown, updateQuestion, url, params: { product } }) => {
	const { suppliers, supplier, products, pageIndex, error_price } = state
	const { name, type, options } = products[pageIndex]
	const id = `${name}-${type}`
	const question = state[id] === 'N/A' ? 'N/A' : state[id]
	const optionsList = [...options, 'N/A']
	const supplierIsValid = optionIsValid(suppliers, supplier)
	const productIsValid = objectIsValid(products, product)
	if (url === '/')
		return <InitialQuestion state={state} updateDropdown={updateDropdown} />
	if (!supplierIsValid)
		return <div style={invalid}>Fabricante inválido <br/> Verifique URL digitada</div>
	if (!productIsValid)
		return <div style={invalid}>Produto inválido <br/> Verifique URL digitada</div>
	return <RemainingQuestions type={type} options={optionsList} id={id} updateQuestion={updateQuestion} question={question} error_price={error_price} />
}

Questions.propTypes = {
	state: PropTypes.object.isRequired,
	updateDropdown: PropTypes.func.isRequired,
	updateQuestion: PropTypes.func.isRequired,
	params: PropTypes.object.isRequired,
	url: PropTypes.string.isRequired
}

export default Questions