import Header from '../../components/Header'
import { IMenu, IMenuFunc } from '../../components/interfaces'
import { icons } from '../../constants/header-icons'
import { useNavigate } from 'react-router-dom'
import AnswerOption from './components/AnswerOption'

interface IQuizData {
	correct: string
	dummy1: string
	dummy2: string
}

const SolveQuiz = ({ quizData }: { quizData: IQuizData }) => {
	const navigate = useNavigate()
	const menu: IMenu = { left: icons.BACK, center: '퀴즈', right: undefined }
	const func: IMenuFunc = { left_func: () => navigate('/quiz'), right_func: undefined }

	const options: string[] = Object.values(quizData)

	return (
		<div className="pt-20">
			<Header menu={menu} func={func}></Header>

			<div className="w-40 h-40">내가 찍은 사진</div>
			<div className="">
				<div className="text-white text-lg">이 물건은 어떤 쓰레기로 분류될까요?</div>

				<div className="flex">
					{options.map((option) => (
						<AnswerOption wasteType={option} />
					))}
				</div>
			</div>
		</div>
	)
}

export default SolveQuiz
