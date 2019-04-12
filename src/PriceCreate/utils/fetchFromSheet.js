import { getProducts, getSuppliers, getIndex } from './getOptions'
import addSpaces from './addSpaces'

const fetchFromSheet = async (get, cancelTokenSource, product, supplierName, search) => {
	const { data: { values } } = await get(
		`${process.env.DATA_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values)
		await Promise.reject('Error at fetchFromSheet. values is undefined')
	if (values.length === 0)
		await Promise.reject('Error at fetchFromSheet. values.length === 0')
	const products = getProducts(values, 3)
	const suppliers = getSuppliers(values, 3)
	const pageIndex = getIndex(products, product)
	if (supplierName) {
		const supplier = addSpaces(supplierName)
		return { products, suppliers, pageIndex, search, supplier }
	}
	return { products, suppliers, pageIndex, search }
}

export default fetchFromSheet