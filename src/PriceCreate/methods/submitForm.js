// import sendToBackend from '../utils/sendToBackend'

const submitForm = that => async () => {
	const keys = Object.keys(that.state)
	const formIsValid = keys.filter(value => {
		if (value.match(/pageIndex|uiState|products|suppliers|supplier|search|error_supplier|error_price/g))
			return false
		return !that.state[value]
	}).length === 0
	if (formIsValid) {
		try {
			that.changeUiState('SUBMIT')
			// await sendToBackend(that.state, sale, action)
			await Promise.resolve('ok')
			that.changeUiState('SUCCESS')
			alert('Enviado com sucesso!')
			that.props.history.push('/')
			const toUpdate = { pageIndex: 0 }
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
	} else
		alert('Erro. Perguntas em branco.')
}

export default submitForm