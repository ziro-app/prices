// import validateForm from '../utils/validateForm'
// import generateErrorMessages from '../utils/generateErrorMessages'
// import sendToBackend from '../utils/sendToBackend'

const submitForm = that => async () => {
	try {
		that.changeUiState('SUBMIT')
		// await sendToBackend(that.state, sale, action)
		await Promise.resolve('ok')
		that.changeUiState('SUCCESS')
		that.setState({
			pageIndex: 0,
			search: '',
			supplier: '',
			error_supplier: '',
			error_price: ''
		})
	} catch (error) {
		console.log(error)
		that.changeUiState('ERROR')
		if (error.response)
			console.log(error.response)
	}
}

export default submitForm