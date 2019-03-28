/* import libraries */
import React, { Component } from 'react'
import { CancelToken } from 'axios'
/* import methods */
import { initialUiState, changeUiState } from './methods/stateMachine'
import fetchInitialData from './methods/fetchInitialData'
import updateIndex from './methods/updateIndex'
import updateDropdown from './methods/updateDropdown'
import updateQuestion from './methods/updateQuestion'
// import submitForm from './methods/submitForm'
import renderForm from './methods/renderForm'

export default class PriceCreate extends Component {
	state = {
		/* initial ui state */
		uiState: initialUiState,
		pageIndex: 0,
		/* dropdown data */
		products: [],
		suppliers: [],
		/* user inputs */
		supplier: '',
		/* error messages */
		error_supplier: ''
	}
	/*-- methods --*/
	cancelTokenSource = CancelToken.source()
	changeUiState = changeUiState(this)
	fetchInitialData = fetchInitialData(this)
	updateIndex = updateIndex(this)
	updateDropdown = updateDropdown(this)
	updateQuestion = updateQuestion(this)
	// submitForm = submitForm(this)
	renderForm = renderForm(this)
	/*-- lifecycle --*/
	componentDidMount = () => this.fetchInitialData()
	componentWillUnmount = () => this.cancelTokenSource.cancel()
	render = () => this.renderForm(this.state.uiState)
}