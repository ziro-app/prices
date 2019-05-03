// import sendToBackend from '../utils/sendToBackend'

const submitForm = that => async () => {
	try {
		that.changeUiState('SUBMIT')
		// await sendToBackend(that.state, sale, action)
		await Promise.resolve('ok')
		that.changeUiState('SUCCESS')
		alert('Enviado com sucesso!')
		that.props.history.push('/')
		const toUpdate = { pageIndex: 0 }
		const keys = Object.keys(that.state)
		for (let i = 0; i < keys.length; i++) {
			if (!keys[i].match(/pageIndex|uiState|products|suppliers/g))
				toUpdate[keys[i]] = ''
		}
		that.setState(toUpdate)
	} catch (error) {
		console.log(error)
		that.changeUiState('ERROR')
		if (error.response)
			console.log(error.response)
	}
}

export default submitForm