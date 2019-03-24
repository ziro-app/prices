import { getProducts, getSuppliers } from './getOptions'

const fetchFromSheet = async (get, cancelTokenSource) => {
	const { data: { values } } = await get(
		`${process.env.DATA_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values)
		await Promise.reject('Error at fetchFromSheet. values is undefined')
	if (values.length === 0)
		await Promise.reject('Error at fetchFromSheet. values.length === 0')
	const products = getProducts(values,3)
	const suppliers = getSuppliers(values,3)
	return { products, suppliers }
}

export default fetchFromSheet