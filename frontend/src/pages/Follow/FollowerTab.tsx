import { useQuery } from '@tanstack/react-query'
import FollowUser from './components/FollowUser'
import { getFollowerList } from './api'

export interface IFollowUser {
	id: number
	userName: string
	createDate: string
	solvedCnt: number
	bottle: number
	growthPoint: number
	profileImg: string
	follow: boolean
}

const FollowerTab = () => {
	const userId = 103
	const { data: follower } = useQuery<IFollowUser[]>({
		queryKey: ['follower', userId],
		queryFn: getFollowerList,
		enabled: !!userId,
	})

	return (
		<div className="pt-12 px-5">
			<ul className="flex flex-col">
				{follower &&
					follower.map((user) => (
						<li key={user.id} className="flex text-textWthi justify-between items-center gap-4 my-2">
							<FollowUser user={user} />
						</li>
					))}
			</ul>
		</div>
	)
}

export default FollowerTab
