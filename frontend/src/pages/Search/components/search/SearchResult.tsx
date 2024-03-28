import { dummy } from '../../../Follow/FollowerTab'
import SearchItem from './SearchItem'

const SearchResult = () => {
	return (
		<ul className='px-4 pt-10'>
			{dummy.map(() => (
				<li key="">
					<SearchItem />
				</li>
			))}
		</ul>
	)
}

export default SearchResult
