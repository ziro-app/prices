const fetchFromSheet = async (get, cancelTokenSource) => {
	const { data: { values } } = await get(
		`${process.env.DATA_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values)
		await Promise.reject('Error at fetchFromSheet. values is undefined')
	if (values.length === 0)
		await Promise.reject('Error at fetchFromSheet. values.length === 0')
	const suppliers = values.map(value => value[5]).slice(2).filter(value => Boolean(value[0]))
	return { suppliers }
}

export default fetchFromSheet