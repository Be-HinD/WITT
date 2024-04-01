import { dummy } from '../../constants/dummy-data'
import FollowSkeleton from './components/FollowSkeleton'
import FollowUser from './components/FollowUser'

const FollowingTab = () => {
	return (
		<div className="pt-12 px-5">
			<ul className="flex flex-col">
				{dummy.map((user) => (
					<li className="flex text-textWthi justify-between items-center gap-4 my-2">
						<FollowUser user={user} />
					</li>
				))}
				<FollowSkeleton />
			</ul>
		</div>
	)
}

export default FollowingTab
