const AnswerOption = ({ wasteType }: { wasteType: string }) => {
	return (
		<div className="bg-gradient-to-tr from-red-800/30 to-red-400/30 w-32 h-32 flex justify-center items-center border-2 rounded-md border-red-800/30 mr-3 ">
			<div className="text-white">{wasteType}</div>
		</div>
	)
}

export default AnswerOption
