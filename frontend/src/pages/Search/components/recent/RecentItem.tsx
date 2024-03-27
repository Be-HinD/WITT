import { IoSearch } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'

// type이 api 통신 전까진 변경될 것 같으니 한 파일 내에 두겠습니다.

export const enum RecentItemType {
	USER = 'USER',
	KEYWORD = 'KEYWORD',
}

interface RecentSearchProp {
	type: RecentItemType
	keyword?: string
	profileImg?: string
	userInfo?: {
		name: string
		level: number
	}
}

const RecentItem = ({ type, keyword, userInfo }: RecentSearchProp) => {
	const handleDelete = () => {}
	const handleClickRecent = () => {}

	// 더미데이터 USER
	const profileImg = '/public/tak.jpeg'

	// 더미데이터 KEYWORD

	return (
		<>
			<div className="flex items-center gap-4 h-10 w-full">
				<div className="w-2/12 rounded-full overflow-hidden">
					{type === RecentItemType.KEYWORD ? <IoSearch className="w-full size-6" /> : <img src={profileImg} alt="dummy" />}
				</div>
				<p onClick={handleClickRecent} className="w-10/12">
					{type === RecentItemType.KEYWORD
						? keyword
						: userInfo && (
								<div>
									<p className="text-whiteText">{userInfo.name}</p>
									<p className="text-xs text-GrayText">Lv.{userInfo.level}</p>
								</div>
						  )}
				</p>
			</div>
			<IoMdClose onClick={handleDelete} className="w-2/12 size-5 text-GrayText" />
		</>
	)
}

export default RecentItem
