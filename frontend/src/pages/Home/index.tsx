import { Link } from 'react-router-dom'
import { mainstate } from '../../components/StateVariables'
import Main from './components/Main'
import Splash from './components/Splash'

const Home = () => {
	const { isLogin, setIsLogin } = mainstate()

	return (
		<div>
			{isLogin ? <Main /> : <Splash />}
			{/* <Link
				to="/quiz"
				className="bg-green-700 text-white rounded-full px-2 py-1 leading-9 hover:bg-green-500 transition-colors"
			>
				go quiz
			</Link>
			<Link
				to="/auth"
				className="bg-green-700 text-white rounded-full px-2 py-1 leading-9 hover:bg-green-500 transition-colors"
			>
				go login
			</Link> */}
		</div>
	)
}

export default Home
