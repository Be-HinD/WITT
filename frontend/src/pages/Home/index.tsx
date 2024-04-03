import { useEffect } from 'react'
import { mainstate } from '../../components/StateVariables'
import Main from './components/Main'
import Splash from './components/Splash'
// import { Cookies } from 'react-cookie'
// import { getToken, getUserData } from './components/API'

const Home = () => {
	// const cookie = new Cookies()
	const { isLogin, setIsLogin } = mainstate((state) => ({
		isLogin: state.isLogin,
		setIsLogin: state.setIsLogin,
	}))

	useEffect(() => {
		// 로컬 디버깅 전용
		if (localStorage.getItem('token')) {
			setIsLogin(true)
		}
		else {
			setIsLogin(false)
		}
	}, [localStorage.getItem('token')])

	return <div>{isLogin ? <Main /> : <Splash />}</div>
}

export default Home
