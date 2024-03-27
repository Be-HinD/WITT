import { useNavigate } from 'react-router-dom'
import { IMenu, IMenuFunc } from '../../components/interfaces'
import { icons } from '../../constants/header-icons'
import Header from '../../components/Header'
import { useEffect } from 'react'
import { mainstate } from '../../components/StateVariables'

const Login = () => {
	const navigate = useNavigate()
	const menu: IMenu = { left: icons.BACK, center: '로그인', right: undefined }
	const func: IMenuFunc = { left_func: () => navigate('/'), right_func: undefined }
	const code = new URL(location.href).searchParams.get('token')

	const { setIsLogin } = mainstate()

	useEffect(() => {
		const url = 'https://j10d103.p.ssafy.io/api/oauth2/authorization/kakao'
		location.href = url
		if (code) {
			localStorage.setItem('token', code)
			navigate('/')
			setIsLogin(true)
		}
	}, [code])

	return (
		<div className=" max-w-screen-sm">
			<Header menu={menu} func={func} />
			<div className="pt-24"></div>
		</div>
	)
}

export default Login
