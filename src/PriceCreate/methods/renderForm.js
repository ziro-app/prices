import React from 'react'
import Form from '../Form/index'
import Header from '../../Header/index'
import Spinner from '../../Spinner/index'
import ErrorOnFetch from '../../ErrorOnFetch/index'

const renderForm = that => uiState => {
	const { match: { params, url } } = that.props
	const componentToRender = {
		default:
			<Form
				state={that.state}
				updateIndex={that.updateIndex}
				updateDropdown={that.updateDropdown}
				updateQuestion={that.updateQuestion}
				updateClipboard={that.updateClipboard}
				updateErrorPrice={that.updateErrorPrice}
				submitForm={that.submitForm}
				url={url}
				params={params}
			/>,
		fetching:
			<Spinner size={'8rem'} />,
		error_fetching:
			<ErrorOnFetch />
	}
	const ui = uiState !== 'fetching' && uiState !== 'error_fetching' ? 'default' : uiState
	const pageIndex = that.state.pageIndex
	const product = that.state.products[pageIndex]
	const subtitle = that.state.supplier ? that.state.supplier : 'Escolha um fabricante'
	let title = ''
	if (product)
		title = `${product.name} ${product.type}`.toUpperCase()
	return <Header title={title} subtitle={subtitle}>{componentToRender[ui]}</Header>
}

export default renderForm