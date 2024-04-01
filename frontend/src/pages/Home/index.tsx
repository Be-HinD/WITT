import { useEffect } from 'react'
import { mainstate } from '../../components/StateVariables'
import Main from './components/Main'
import Splash from './components/Splash'
// import { getToken, getUserData } from './components/API'
import { Cookies } from 'react-cookie'

const Home = () => {
	const cookie = new Cookies()
	const { isLogin, setIsLogin } = mainstate((state) => ({
		isLogin: state.isLogin,
		setIsLogin: state.setIsLogin,
	}))

	useEffect(() => {
		if (cookie.get('refresh_token')) {
			setIsLogin(true)
		}
	}, [])

	return <div>{isLogin ? <Main /> : <Splash />}</div>
}

export default Home
