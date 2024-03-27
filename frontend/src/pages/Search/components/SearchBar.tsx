import { MdCancel } from 'react-icons/md'
import { IoSearch } from 'react-icons/io5'

interface searchProp {
	input: string | undefined
	setInput: React.Dispatch<React.SetStateAction<string>>
	setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
	handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const SearchBar = ({ input, setInput, setIsFocused, handleInput }: searchProp) => {
	const handleCancel = () => {
		setInput('')
	}

	return (
		<div className="flex gap-2 w-full items-center text-whiteText">
			<div className="flex items-center justify-between px-3 py-2 w-10/12 bg-neutral-800 rounded-lg">
				<div className="flex gap-2">
					<IoSearch className="size-6" />
					<input
						type="text"
						value={input}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						placeholder="사용자를 검색해 보세요."
						onChange={handleInput}
						className=" bg-neutral-800 focus:outline-none"
					/>
				</div>
				<MdCancel onClick={handleCancel} className="size-5" />
			</div>
			<p onClick={handleCancel} className="w-2/12 text-center">
				취소
			</p>
		</div>
	)
}

export default SearchBar
