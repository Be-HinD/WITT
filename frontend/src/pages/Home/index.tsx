import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div>
			<p>Home Page</p>
			<Link
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
			</Link>
		</div>
	)
}

export default Home
