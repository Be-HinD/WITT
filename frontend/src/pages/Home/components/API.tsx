import axios from 'axios'

export const getToken = async (token: string) => {
	const url = '/api/token'
	const body = { refreshToken: token }
	console.log(body)
	return await axios
		.post(url, body)
		.then((response) => {
			return response.data
		})
		.catch((e) => {
			console.error(e)
			return ''
		})
}

export const getUserData = async (accesstoken: string) => {
	const url = '/api/user'
	const config = {
		headers: {
			Authorization: `Bearer ${accesstoken}`,
		},
	}
	return await axios
		.get(url, config)
		.then((response) => {
			return response.data
		})
		.catch((e) => console.error(e))
}
