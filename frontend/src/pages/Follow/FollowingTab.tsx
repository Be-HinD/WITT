import { dummy } from '../../constants/dummy-data'
import FollowUser from './components/FollowUser'

const FollowingTab = () => {
	return (
		<div className="pt-12 px-5">
			{dummy.map((user) => (
				<FollowUser user={user}/>
			))}
		</div>
	)
}

export default FollowingTab
