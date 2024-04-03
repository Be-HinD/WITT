import axios from 'axios'

export const getToken = async (token: string) => {
	const url = '/api/token'
	const body = { refreshToken: token }
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
		.catch((e) => {
			console.error(e)
			return {}
		})
}

export const otherUserData = async (accesstoken: string, id: number) => {
	const url = `/api/user/invitor/${id}`
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
		.catch((e) => {
			console.error(e)
			return {}
		})
}

export const feedCharacter = async (accesstoken: string) => {
	console.log(accesstoken)
	const url = '/api/user/character'
	const config = {
		headers: {
			Authorization: `Bearer ${accesstoken}`,
		},
	}
	return await axios
		.put(url, config)
		.then((response) => {
			return response.data
		})
		.catch((e) => {
			console.error(e)
			return {}
		})
}

export const follow = async (accesstoken: string, id: number) => {
	const url = `/api/user/follow/${id}`
	const config = {
		headers: {
			Authorization: `Bearer ${accesstoken}`,
		},
	}
	return await axios
		.post(url, config)
		.then((response) => {
			if (response.status == 200) {
				return true
			} else {
				return false
			}
		})
		.catch(() => {
			return false
		})
}

export const unfollow = async (accesstoken: string, id: number) => {
	const url = `/api/user/unfollow/${id}`
	const config = {
		headers: {
			Authorization: `Bearer ${accesstoken}`,
		},
	}
	return await axios
		.delete(url, config)
		.then((response) => {
			if (response.status == 200) {
				return true
			} else {
				return false
			}
		})
		.catch(() => {
			return false
		})
}

export const kock = async (accesstoken: string, id: number) => {
	const url = `/api/user/kock/${id}`
	const config = {
		headers: {
			Authorization: `Bearer ${accesstoken}`,
		},
	}
	return await axios
		.post(url, config)
		.then((response) => {
			if (response.status == 200) {
				return true
			} else {
				return false
			}
		})
		.catch(() => {
			return false
		})
}
