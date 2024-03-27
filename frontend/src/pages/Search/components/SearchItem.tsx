const SearchItem = () => {
	// 더미 데이터
	const profileImg = '/public/tak.jpeg'
	const userName = '탁잉'
	const level = 'Lv.1'

	return (
		<div className="flex text-textWthi justify-start items-center gap-4 my-4">
			<div className="size-12 rounded-full overflow-hidden">
				<img src={profileImg} alt="dummy" />
			</div>
			<div className="flex flex-col justify-start">
				<p className="text-whiteText">{userName}</p>
				<p className="text-xs text-GrayText">{level}</p>
			</div>
		</div>
	)
}

export default SearchItem
