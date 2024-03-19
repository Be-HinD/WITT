interface Iprops {
	trashType: string
	bagType: string
	days: string[]
	time: {
		from: number
		to: number
	}
	place: string
}
const detailedInst = (props: Iprops) => {
	return (
		<div>
			<p>이 물건은 {props.trashType}로 배출해요.</p>

			<p>
				{props.trashType}는 {props.bagType} 봉투에 넣어서 {...props.days} 요일
				{props.time.from}시에서 {props.time.to}시 사이에
				{props.place}에 배출해요.
			</p>

			<button>퀴즈 더 풀기</button>
		</div>
	)
}

export default detailedInst
