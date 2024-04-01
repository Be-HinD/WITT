import { Link } from 'react-router-dom'

const AnswerOption = ({ wasteType, correct }: { wasteType: string; correct: string }) => {
	return (
		<div className="bg-gradient-to-tr from-neutral-800/30 to-neutral-400/30 w-32  flex justify-center items-center border-2 rounded-md border-neutral-800/30 mr-3 ">
			{correct === wasteType ? (
				<Link to="correct" className="text-white">
					{wasteType}
				</Link>
			) : (
				<Link to="wrong" className="text-white">
					{wasteType}
				</Link>
			)}
		</div>
	)
}

export default AnswerOption
