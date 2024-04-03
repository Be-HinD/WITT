import { useQuery } from '@tanstack/react-query'
import { getFollowingList } from './api'
import FollowSkeleton from './components/FollowSkeleton'
import FollowUser from './components/FollowUser'
import { IFollowUser } from './FollowerTab'

const FollowingTab = () => {
	const userId = 3
	const { data: following } = useQuery<IFollowUser[]>({
		queryKey: ['following', userId],
		queryFn: getFollowingList,
		enabled: !!userId,
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
				<FollowSkeleton />
			</ul>
		</div>
	)
}

export default FollowingTab
