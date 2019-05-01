const updateIndex = that => (navigation, supplierIsValid) => {
	if (supplierIsValid) {
		that.setState({ error_supplier: '', error_price: '' })
		const increment = navigation === 'next' ? 1 : -1
		const newIndex = that.state.pageIndex + increment
		const maxValue = that.state.products.length - 1
		if (newIndex > 0 && newIndex <= maxValue)
			that.setState({ pageIndex: newIndex })
		else if (newIndex <= 0)
			that.setState({ pageIndex: 0 })
		else if (newIndex > maxValue)
			that.setState({ pageIndex: maxValue })
	}
	else
		that.setState({ error_supplier: 'Escolha um fabricante válido' })
}

export default updateIndex