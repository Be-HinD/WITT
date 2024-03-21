import { Link, useNavigate } from 'react-router-dom'
import { IMenu, IMenuFunc } from '../../components/interfaces'
import { icons } from '../../constants/header-icons'
import Header from '../../components/Header'

const Login = () => {
	const navigate = useNavigate()
	const menu: IMenu = { left: icons.BACK, center: 'test', right: undefined }
	const func: IMenuFunc = { left_func: () => navigate('/'), right_func: undefined }

	return (
		<div className=" max-w-screen-sm">
			<Header menu={menu} func={func} />
			<div className='pt-24'>
				<p>Login Page</p>
				<Link
					to="/"
					className="bg-green-700 text-white rounded-full px-2 py-1 leading-9 hover:bg-green-500 transition-colors"
				>
					go home
				</Link>
			</div>
		</div>
	)
}

export default Login
