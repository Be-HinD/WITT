import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div>
			<p>Login Page</p>
			<Link
				to="/"
				className="bg-green-700 text-white rounded-full px-2 py-1 leading-9 hover:bg-green-500 transition-colors"
			>
				go home
			</Link>
		</div>
	)
}

export default Login
