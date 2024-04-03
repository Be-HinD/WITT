import { useMutation } from '@tanstack/react-query'
import { deleteFollow, postFollow } from '../api'
import { IFollowUser } from '../FollowerTab'

interface FollowProp {
	user: IFollowUser
}

const FollowUser = ({ user }: FollowProp) => {
	console.log("[user]", user)
	const follow = useMutation({ mutationFn: postFollow })
	const unfollow = useMutation({ mutationFn: deleteFollow })
	const handleFollow = () => {
		follow.mutate({ fromId: user.id })
		if (follow.isSuccess) {
			console.log(follow.data, 'success')
		} else console.log('else')
	}
	const handleUnfollow = () => {
		unfollow.mutate({ fromId: user.id })
		if (unfollow.isSuccess) {
			console.log(unfollow.data, 'success')
		} else console.log('else')
	}
	return (
		<>
			<div className="size-full rounded-full overflow-hidden w-2/12 shrink-0">
				<img
					src={user.profileImg ? user.profileImg : `/public/dummy/random/${user.id % 7}`}
					alt="dummy"
					className="object-cover aspect-square"
				/>
			</div>
			<div className="flex flex-col justify-start w-8/12">
				<p>{user.userName}</p>
				<p className="text-xs text-GrayText">Lv.{user.growthPoint / 10}</p>
			</div>
			{!user.follow ? (
				<button
					onClick={handleFollow}
					className="text-sm hover:bg-sky-800 transition-colors bg-sky-900 rounded-xl w-2/12 py-1 shrink-0"
				>
					팔로우
				</button>
			) : (
				<button
					onClick={handleUnfollow}
					className="text-sm hover:bg-slate-600 transition-colors bg-slate-700 rounded-xl w-2/12 py-1 shrink-0"
				>
					팔로잉
				</button>
			)}
		</>
	)
}

export default FollowUser
