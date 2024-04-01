import { useEffect } from 'react'
import { mainstate } from '../../components/StateVariables'
import Main from './components/Main'
import Splash from './components/Splash'
import { getToken, getUserData } from './components/API'
import { Cookies } from 'react-cookie'

const Home = () => {
	const cookie = new Cookies()
	const token = mainstate((state) => state.token)
	const { isLogin, setIsLogin } = mainstate((state) => ({
		isLogin: state.isLogin,
		setIsLogin: state.setIsLogin,
	}))

	const getData = async () => {
		if (cookie.get('refresh_token')) {
			const accesstoken = await getToken(cookie.get('refresh_token')!)
			localStorage.setItem('token', accesstoken)
			const result = await getUserData(accesstoken!)
			localStorage.setItem('mydata', JSON.stringify(result.data))
		}
	}

	useEffect(() => {
		if (token) {
			getData().then(() => setIsLogin(true))
		}
	}, [])

	return <div>{isLogin ? <Main /> : <Splash />}</div>
}

export default Home
