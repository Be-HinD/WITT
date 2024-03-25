import FollowUser from './components/FollowUser'
import { dummy } from './FollowerTab'

const FollowingTab = () => {
	return (
		<div className="pt-12 px-5">
			{dummy.map(() => (
				<FollowUser />
			))}
		</div>
	)
}

export default FollowingTab
