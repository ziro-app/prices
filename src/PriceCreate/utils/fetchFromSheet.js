import { getProducts, getSuppliers, getIndex } from './getOptions'

const fetchFromSheet = async (get, cancelTokenSource, product, supplier) => {
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
	if (supplier)
		return { products, suppliers, pageIndex, supplier }
	return { products, suppliers, pageIndex }
}

export default fetchFromSheet