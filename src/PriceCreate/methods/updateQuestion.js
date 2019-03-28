const updateQuestion = that => (name, value) => {
	if (value) {
		that.setState({ [name]: value })
		that.changeUiState('INPUT')
	}
	else {
		that.setState({ [name]: '' })
		that.changeUiState('INPUT')
	}
}

export default updateQuestion