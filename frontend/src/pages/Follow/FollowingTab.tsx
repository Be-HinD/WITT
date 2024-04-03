import { useQuery } from '@tanstack/react-query'
import { getFollowingList } from './api'
import FollowUser from './components/FollowUser'
import { IFollowUser } from './FollowerTab'

const FollowingTab = () => {
	const userId = 103
	const { data: following } = useQuery<IFollowUser[]>({
		queryKey: ['following', userId],
		queryFn: getFollowingList,
	})

	return (
		<div className="pt-12 px-5">
			<ul className="flex flex-col">
				{following &&
					following.map((user) => (
						<li key={user.id} className="flex text-textWthi justify-between items-center gap-4 my-2">
							<FollowUser user={user} />
						</li>
					))}
			</ul>
		</div>
	)
}

export default FollowingTab
