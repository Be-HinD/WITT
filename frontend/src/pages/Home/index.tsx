import { useEffect } from 'react'
import { mainstate } from '../../components/StateVariables'
import Main from './components/Main'
import Splash from './components/Splash'
import { Cookies } from 'react-cookie'
import { getToken, getUserData } from './components/API'

const Home = () => {
	const cookie = new Cookies()
	const { isLogin, setIsLogin } = mainstate((state) => ({
		isLogin: state.isLogin,
		setIsLogin: state.setIsLogin,
	}))

	useEffect(() => {
		if (cookie.get('refresh_token') || localStorage.getItem('token')) {
			if (cookie.get('refresh_token')) {
				getUserData(localStorage.getItem('token')!).then((value) => {
					if (!value) {
						getToken(cookie.get('refresh_token')!).then((value) => {
							localStorage.setItem('token', value.data)
						})
					}
				})
			}
			setIsLogin(true)
		}
	}, [])

	return <div>{isLogin ? <Main /> : <Splash />}</div>
}

export default Home
