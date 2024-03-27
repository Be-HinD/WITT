const FollowUser = () => {
	// 더미 데이터
	const profileImg = '/public/tak.jpeg'
	const userName = '탁잉'
	const level = 'Lv.1'
	const isFollow = false

	return (
		<div className="flex text-textWthi justify-between items-center gap-4 my-4">
			<div className="size-full rounded-full overflow-hidden w-2/12 shrink-0">
				<img src={profileImg} alt="dummy" />
			</div>
			<div className="flex flex-col justify-start w-8/12">
				<p>{userName}</p>
				<p className="text-xs">{level}</p>
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
		</div>
	)
}

export default FollowUser