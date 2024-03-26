import { useEffect } from 'react'
import { mainstate } from '../../components/StateVariables'
import Main from './components/Main'
import Splash from './components/Splash'

const Home = () => {
	const { isLogin, setIsLogin } = mainstate()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setIsLogin(true)
		}
	}, [isLogin])

	return <div>{isLogin ? <Main /> : <Splash />}</div>
}

export default Home
