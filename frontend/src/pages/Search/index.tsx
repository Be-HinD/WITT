import { useState } from 'react'
import Header from '../../components/Header'
import { IMenu, IMenuFunc } from '../../components/interfaces'
import { icons } from '../../constants/header-icons'
import { useRouter } from '../../hooks/useRouter'
import SearchBar from './components/SearchBar'
import RecentSearch from './components/recent/RecentSearch'
import SearchResult from './components/search/SearchResult'

const Search = () => {
	// header
	const { goBack } = useRouter()
	const menu: IMenu = { left: icons.BACK, center: '검색', right: undefined }
	const func: IMenuFunc = { left_func: () => goBack(), right_func: undefined }

	// state
	const [isFocused, setIsFocused] = useState(false)

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setInput(e.target.value)
	}

	const [input, setInput] = useState('')

  {/*
      검색창에
      포커스 되면 -> 검색 결과 리스트 보여주기 <SearchResult />
      포커스 벗어나면 -> 최근 검색 리스트 보여주기 <RecentSearch /> (최근 검색 타입: USER, KEYWORD)
  */}

	return (
		<div className="text-whiteText">
			<Header menu={menu} func={func} />
			<section className="flex flex-col gap-2 mt-14 px-4">
				<SearchBar input={input} setInput={setInput} setIsFocused={setIsFocused} handleInput={handleInput} />
				<fieldset>{isFocused ? <SearchResult /> : <RecentSearch type="KEYWORD" />}</fieldset>
			</section>
		</div>
	)
}

export default Search
