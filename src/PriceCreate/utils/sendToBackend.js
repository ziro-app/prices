import { post } from 'axios'

const sendToBackend = async data => {
	const { uiState, pageIndex, search, products, suppliers, error_supplier, error_price, ...dataToSubmit } = data
	Object.keys(dataToSubmit).map(key => dataToSubmit[key] = dataToSubmit[key].replace(',','.'))
	console.log(dataToSubmit)
	const { data: message } = await post(`${process.env.API_URL}`, dataToSubmit)
	if (message !== 'Success')
		await Promise.reject(`Error submitting form. At sendToBackend: ${message}`)
	const { data: message2 } = await post(`${process.env.API_URL}`, dataToSubmit)
	if (message2 !== 'Success')
		await Promise.reject(`Error submitting form. At sendToBackend: ${message2}`)
}

export default sendToBackend