import { mainstate } from '../../components/StateVariables'
import Main from './components/Main'
import Splash from './components/Splash'

const Home = () => {
	const { isLogin } = mainstate()

	return <div>{isLogin ? <Main /> : <Splash />}</div>
}

export default Home
