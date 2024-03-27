import { useState } from 'react'
import Header from '../../components/Header'
import { IMenu, IMenuFunc } from '../../components/interfaces'
import { icons } from '../../constants/header-icons'
import { useRouter } from '../../hooks/useRouter'
import SearchBar from './components/SearchBar'
import SearchItem from './components/SearchItem'

const Search = () => {
	const { goBack } = useRouter()
	const menu: IMenu = { left: icons.BACK, center: '검색', right: undefined }
	const func: IMenuFunc = { left_func: () => goBack(), right_func: undefined }

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setInput(e.target.value)
	}

	const [input, setInput] = useState('')
	return (
		<div className="text-whiteText">
			<Header menu={menu} func={func} />
			<section className="flex flex-col gap-2 mt-14 px-4">
				<SearchBar input={input} setInput={setInput} handleInput={handleInput} />
				<fieldset>
					<SearchItem />
					<SearchItem />
					<SearchItem />
				</fieldset>
			</section>
		</div>
	)
}

export default Search
