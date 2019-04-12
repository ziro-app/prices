import { get, isCancel } from 'axios'
import fetchFromSheet from '../utils/fetchFromSheet'

const fetchInitialData = that => async () => {
	try {
		// get initial route from react-router params
		const { match: { params: { product, supplier } }, location: { search } } = that.props
		that.setState(
			await fetchFromSheet(get, that.cancelTokenSource, product, supplier, search),
			() => {
				const products = that.state.products.slice(1)
				for (let i = 0; i < products.length; i++)
					that.setState({ [`${products[i].name}-${products[i].type}`]: '' })
			}
		)
		that.changeUiState('SUCCESS')
	} catch (error) {
		if (isCancel(error))
			console.log('Request canceled')
		else {
			console.log(error)
			that.changeUiState('ERROR')
			if (error.response)
				console.log(error.response)
		}
	}
}

export default fetchInitialData