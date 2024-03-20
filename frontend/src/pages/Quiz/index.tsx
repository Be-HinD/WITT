import { Link } from 'react-router-dom'

const Quiz = () => {
	return (
		<div>
			<p>Quiz Page</p>
			<p>사용방법</p>
			<p>사진 찍고 퀴즈 풀기</p>
			<Link
				to="/quiz/camera"
				className="bg-green-700 text-white rounded-full px-2 py-1 leading-9 hover:bg-green-500 transition-colors"
			>
				사진
			</Link>
			<Link
				to="/"
				className="bg-green-700 text-white rounded-full px-2 py-1 leading-9 hover:bg-green-500 transition-colors"
			>
				go home
			</Link>
		</div>
	)
}

export default Quiz
