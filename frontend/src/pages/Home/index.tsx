import { useEffect } from 'react'
import { mainstate } from '../../components/StateVariables'
import Main from './components/Main'
import Splash from './components/Splash'
import { Cookies } from 'react-cookie'
import { getToken } from './components/API'

const Home = () => {
	const cookie = new Cookies()
	const token = cookie.get('refresh_token')
	const { isLogin, setIsLogin } = mainstate((state) => ({
		isLogin: state.isLogin,
		setIsLogin: state.setIsLogin
	}))
	

	const accessToken = async (token: string) => {
		const result = await getToken(token)
		return result.accessToken
	}

	useEffect(() => {
		if (token) {
			const userToken = accessToken('token')
			userToken.then(async (value) => {
			localStorage.setItem('token', value)
			setIsLogin(true)
		})
		}
		// const userToken = accessToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcmFpc2luZ2R1c3Qvb2lqYWZkLmNvbSIsImlhdCI6MTcxMTg0MDc4OSwiZXhwIjoxNzEzMDUwMzg5LCJzdWIiOiIxMSIsImlkIjoxMX0.UkFIR3WTFiNsaRNeMCNxfFUjHxfYBykroI1IUbaSm50')
		// userToken.then(async (value) => {
			// localStorage.setItem('token', value)
			// setIsLogin(true)
		// })

	}, [])

	return <div>{isLogin ? <Main /> : <Splash />}</div>
}

export default Home
