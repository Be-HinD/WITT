import ResultModal from './components/ResultModal'
import DetailedInst from './components/DetailedInst'
import { useState } from 'react'

const CorrectPage = () => {
	const comment = '정답입니다!'
	const emoji = 'DropletEmoji'
	const result = '물 1개 획득'
	const next = '물 주러 가기'
	const [isVisible, setIsvisible] = useState(true)

	const handleVisibility = () => {
		setIsvisible(false)
	}

	return (
		<div className="">
			{isVisible ? (
				<div className="w-full h-full">
					<div className="bg-black bg-opacity-60 absolute z-10 w-full h-full" onClick={handleVisibility}></div>
					<ResultModal comment={comment} emoji={emoji} next={next} result={result} />
				</div>
			) : null}

			<DetailedInst />
		</div>
	)
}

export default CorrectPage
