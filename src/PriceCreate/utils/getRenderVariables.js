import { optionIsValid } from './validateFields'
import removeSpaces from './removeSpaces'

const getRenderVariables = ({ suppliers, supplier, products, pageIndex }) => {
	const supplierIsValid = optionIsValid(suppliers, supplier)
	const labelSecondary = pageIndex === 0 ? 'Compartilhar' : 'Anterior'
	const labelPrimary = pageIndex === products.length - 1 ? 'Enviar' : 'Próximo'
	const { prev, next } = products[pageIndex]
	const prevLink = prev ? `/${removeSpaces(supplier)}/${prev}` : '/'
	const nextLink = next ? `/${removeSpaces(supplier)}/${next}` : '#'
	const back = pageIndex === 0 || !supplierIsValid ? '#' : prevLink
	const forward = supplierIsValid ? nextLink : '#'
	return { labelSecondary, labelPrimary, back, forward, supplierIsValid }
}

export default getRenderVariables