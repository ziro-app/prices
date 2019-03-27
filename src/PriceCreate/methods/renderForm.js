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
				params={params}
				url={url}
			/>,
		fetching:
			<Spinner size={'8rem'} />,
		error_fetching:
			<ErrorOnFetch />
	}
	const ui = uiState !== 'fetching' && uiState !== 'error_fetching' ? 'default' : uiState
	const pageIndex = that.state.pageIndex
	const product = that.state.products[pageIndex]
	let title = ''
	if (product)
		title = `${product.name} ${product.type}`.toUpperCase()
	return <Header title={title}>{componentToRender[ui]}</Header>
}

export default renderForm