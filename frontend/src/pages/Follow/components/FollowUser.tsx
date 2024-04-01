import { ISearchUser } from "../../Search/search-types"

// interface IUser extends ISearchUser {
// 	isFollow: boolean
// }
interface FollowProp {
	user: ISearchUser
}

const FollowUser = ({user}: FollowProp) => {
	// 더미 데이터
	const isFollow = true

	return (
		<>
			<div className="size-full rounded-full overflow-hidden w-2/12 shrink-0">
				<img src={user.profileImg} alt="dummy" className="object-cover aspect-square"/>
			</div>
			<div className="flex flex-col justify-start w-8/12">
				<p>{user.userName}</p>
				<p className="text-xs text-GrayText">Lv.{user.level}</p>
			</div>
			{isFollow ? (
				<button className="text-sm hover:bg-sky-800 transition-colors bg-sky-900 rounded-xl w-2/12 py-1 shrink-0">
					팔로우
				</button>
			) : (
				<button className="text-sm hover:bg-slate-600 transition-colors bg-slate-700 rounded-xl w-2/12 py-1 shrink-0">
					팔로잉
				</button>
			)}
		</>
	)
}

export default FollowUser
