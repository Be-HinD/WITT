import CircularProgress from '@mui/material/CircularProgress'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SolveQuiz from './SolveQuiz'

interface IQuizData {
	correct: string
	dummy1: string
	dummy2: string
}

const Loading = ({ gptAnswer }: { gptAnswer: number }) => {
	const [quizData, setQuizData] = useState<IQuizData | undefined>()

	// const axiosheaders = {
	// 	Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcmFpc2luZ2R1c3Qvb2lqYWZkLmNvbSIsImlhdCI6MTcxMTY4OTc0NiwiZXhwIjoxNzExNzc2MTQ2LCJzdWIiOiIxMTE4MCIsImlkIjoxMTE4MH0.wOPT1k9tYJzkq2Q7cPhm0bGQrHobDcXkbZv2a8Nh_-U`,
	// }

	const generateQuiz = (gptAnswer: number) => {
		axios
			.get(`${import.meta.env.VITE_API_BASE_URL}/problem`, { params: { number: gptAnswer } })
			.then((response) => {
				console.log(response.data)
				setQuizData(response.data.data)
			})
			.catch((error) => {
				console.error(error)
			})
	}

	useEffect(() => {
		generateQuiz(gptAnswer)
	}, [gptAnswer])

	return (
		<div>
			{quizData ? (
				<SolveQuiz quizData={quizData} />
			) : (
				<div>
					<div className="pt-20 text-white">퀴즈를 만들고 있어요! 잠시만 기다려주세요...</div>
					<div>
						<CircularProgress />
					</div>
				</div>
			)}
		</div>
	)
}

export default Loading
