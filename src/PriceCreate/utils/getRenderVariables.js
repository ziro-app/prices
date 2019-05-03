import { optionIsValid, objectIsValid } from './validateFields'
import removeSpaces from './removeSpaces'

const getRenderVariables = (state, product) => {
	const { suppliers, supplier, products, pageIndex, search } = state
	const productIsValid = objectIsValid(products, product)
	const supplierIsValid = optionIsValid(suppliers, supplier)
	const labelSecondary = pageIndex === 0 ? 'Compartilhar' : 'Anterior'
	const labelPrimary = pageIndex === products.length - 1 ? 'Enviar' : 'Próximo'
	const { prev, next } = products[pageIndex]
	const prevLink = prev ? `/${removeSpaces(supplier)}/${prev}${search}` : '/'
	const nextLink = next ? `/${removeSpaces(supplier)}/${next}${search}` : '#'
	const back = pageIndex === 0 || !supplierIsValid ? '#' : prevLink
	const id = `${products[pageIndex].name}-${products[pageIndex].type}`
	const price = state[id] && state[id].trim() ? state[id].replace(',','.') : null
	const priceIsValid = state[id] === 'N/A' ? true : price && !isNaN(price)
	const forward = supplierIsValid ? nextLink : '#'
	const numberOfProducts = products.length
	return {
		labelSecondary, labelPrimary, back, forward, supplierIsValid, productIsValid, pageIndex,
		search, priceIsValid, numberOfProducts
	}
}

export default getRenderVariables