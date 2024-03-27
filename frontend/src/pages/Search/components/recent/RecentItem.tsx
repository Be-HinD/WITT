import { IoSearch } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'

// type이 api 통신 전까진 변경될 것 같으니 한 파일 내에 두겠습니다.

const enum RecentItemType {
	USER = 'USER',
	KEYWORD = 'KEYWORD',
}

interface RecentSearchProp {
	type: RecentItemType
}

const RecentItem = ({ type }: RecentSearchProp) => {
	const handleDelete = () => {}
	const handleClickRecent = () => {}

	// 더미데이터 USER
	const profileImg = '/public/tak.jpeg'
	const userName = '탁잉'
	const level = 'Lv.1'

	// 더미데이터 KEYWORD
	const keyword = 'want_u.u'

	return (
		<>
			<div className="flex items-center gap-4 h-10 w-full">
				<div className="w-2/12 rounded-full overflow-hidden">
					{type === RecentItemType.KEYWORD ? <IoSearch className="w-full" /> : <img src={profileImg} alt="dummy" />}
				</div>
				<p onClick={handleClickRecent} className="w-10/12">
					{type === RecentItemType.KEYWORD ? (
						keyword
					) : (
						<div>
							<p className="text-whiteText">{userName}</p>
							<p className="text-xs text-GrayText">{level}</p>
						</div>
					)}
				</p>
			</div>
			<IoMdClose onClick={handleDelete} className="w-2/12 text-GrayText" />
		</>
	)
}

export default RecentItem
