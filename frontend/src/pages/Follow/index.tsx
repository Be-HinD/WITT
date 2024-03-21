import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { IMenu, IMenuFunc } from '../../components/interfaces'
import { icons } from '../../constants/header-icons'

const Follow = () => {
	const navigate = useNavigate()
	const menu: IMenu = { left: icons.BACK, center: '친구들', right: undefined }
	const func: IMenuFunc = { left_func: () => navigate('/'), right_func: undefined }

	return (
		<div className='w-full'>
			<Header menu={menu} func={func} />
			<div className="pt-20">followdd</div>
		</div>
	)
}

export default Follow
