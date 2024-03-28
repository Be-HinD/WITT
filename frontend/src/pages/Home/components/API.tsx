import axios, { AxiosRequestConfig } from 'axios'

export const getToken = async (token: string) => {
	const url = '/api/token'
	const config = {
		headers: { 'Content-Type': 'application/json' },
	} as AxiosRequestConfig
	const body = { refreshToken: token }
	return await axios
		.post(url, body, config)
		.then((response) => {
			return response.data
		})
		.catch((e) => console.error(e))
}

export const getUserName = async () => {}
