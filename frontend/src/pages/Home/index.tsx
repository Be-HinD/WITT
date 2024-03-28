import { useEffect } from 'react'
import { mainstate } from '../../components/StateVariables'
import Main from './components/Main'
import Splash from './components/Splash'

const Home = () => {
	const token = new URL(location.href).searchParams.get('token')
	const { isLogin, setIsLogin } = mainstate()

	useEffect(() => {
		if (token) {
			setIsLogin(true)
			console.log(token)
		}
	})

	return <div>{isLogin ? <Main /> : <Splash />}</div>
}

export default Home
