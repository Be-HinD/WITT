import { useState } from 'react'
import Header from '../../components/Header'
import { IMenu, IMenuFunc } from '../../components/interfaces'
import { icons } from '../../constants/header-icons'
import { useRouter } from '../../hooks/useRouter'
import SearchBar from './components/SearchBar'

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
		<div className="text-textWthie">
			<Header menu={menu} func={func} />
			<div className="mt-14 px-4">
				<SearchBar input={input} setInput={setInput} handleInput={handleInput}/>
			</div>
		</div>
	)
}

export default Search
