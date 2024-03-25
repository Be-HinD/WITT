import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { IMenu, IMenuFunc } from '../../components/interfaces'
import { icons } from '../../constants/header-icons'
import FollowTabs from './components/FollowTabs'

const followTabInfo = [
	{ name: '팔로워', path: '/follow/follower' },
	{
		name: '팔로잉',
		path: '/follow/following',
	},
]
const Follow = () => {
	const navigate = useNavigate()
	const menu: IMenu = { left: icons.BACK, center: '친구들', right: undefined }
	const func: IMenuFunc = { left_func: () => navigate('/'), right_func: undefined }

	return (
		<div className="w-full">
			<Header menu={menu} func={func} />
			<div className="pt-14 text-white">
				<FollowTabs tabInfo={followTabInfo} />
				<Outlet />
			</div>
		</div>
	)
}

export default Follow
