import { dummy } from '../../constants/dummy-data'
import FollowUser from './components/FollowUser'

const FollowerTab = () => {
	return (
		<div className="pt-12 px-5">
			{dummy.map((user) => (
				<FollowUser user={user}/>
			))}
		</div>
	)
}

export default FollowerTab
