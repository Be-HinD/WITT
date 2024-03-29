import { dummy } from '../../../../constants/dummy-data'
import { RecentItemType, SearchResultProp } from '../../search-types'
import RecentItem from '../recent/RecentItem'

const SearchResult = ({userUpdate} : SearchResultProp) => {
	return (
		<ul className="flex flex-col px-4 pt-14 gap-8 z-10">
			{dummy.map((user) => (
				<li key={user.userName}>
					<RecentItem type={RecentItemType.USER} userUpdate={userUpdate} userInfo={user} />
				</li>
			))}
		</ul>
	)
}

export default SearchResult
