import { post } from 'axios'

const sendToBackend = async (data) => {
	const { data: message } = await post(`${process.env.API_URL}`, {})
	if (message !== 'Success')
		await Promise.reject(`Error submitting form. At sendToBackend: ${message}`)
}

export default sendToBackend