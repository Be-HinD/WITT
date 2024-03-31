import { useEffect } from 'react'
import { mainstate } from '../../components/StateVariables'
import Main from './components/Main'
import Splash from './components/Splash'
import { getUserData } from './components/API'

const Home = () => {
	const token = mainstate((state) => state.token)
	const { isLogin, setIsLogin } = mainstate((state) => ({
		isLogin: state.isLogin,
		setIsLogin: state.setIsLogin
	}))

	const getData = async () => {
		if (token !== '') {
			const result = await getUserData(token!)
			localStorage.setItem('mydata', JSON.stringify(result.data))
		}
	}

	useEffect(() => {
		if (token) {
			getData().then(() => setIsLogin(true))
		}
	}, [token])

	return <div>{isLogin ? <Main /> : <Splash />}</div>
}

export default Home
