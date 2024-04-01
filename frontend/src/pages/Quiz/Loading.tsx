import CircularProgress from '@mui/material/CircularProgress'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SolveQuiz from './SolveQuiz'
import { useQuizStore } from './store'

interface IQuizData {
	correct: string
	dummy1: string
	dummy2: string
}

const Loading = ({ gptAnswer, capturedImage }: { gptAnswer: number; capturedImage: File }) => {
	const [quizData, setQuizData] = useState<IQuizData | undefined>()
	const { setAnswerType, setImage } = useQuizStore()

	// const axiosheaders = {
	// 	Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcmFpc2luZ2R1c3Qvb2lqYWZkLmNvbSIsImlhdCI6MTcxMTY4OTc0NiwiZXhwIjoxNzExNzc2MTQ2LCJzdWIiOiIxMTE4MCIsImlkIjoxMTE4MH0.wOPT1k9tYJzkq2Q7cPhm0bGQrHobDcXkbZv2a8Nh_-U`,
	// }

	const generateQuiz = (gptAnswer: number) => {
		axios
			.get(`${import.meta.env.VITE_API_BASE_URL}/problem`, { params: { number: gptAnswer } })
			.then((response) => {
				console.log(response)
				setQuizData(response.data.data)
				if (quizData?.correct === '1') {
					setAnswerType(0)
				} else if (quizData?.correct === '2') {
					setAnswerType(1)
				} else {
					setAnswerType(2)
				}
			})
			.catch((error) => {
				console.error(error)
			})
	}

	useEffect(() => {
		setImage(capturedImage)
		generateQuiz(gptAnswer)
	})

	return (
		<div className="pt-20">
			{quizData ? (
				<SolveQuiz quizData={quizData} capturedImage={capturedImage} />
			) : (
				<div>
					<div>
						<img src={URL.createObjectURL(capturedImage)} className="w-[60%] mx-[20%] mt-6 mb-10 rounded-2xl" />
					</div>
					<div className="text-white ml-5 text-lg font-semibold">
						<div>퀴즈를 만들고 있어요!</div>
						<div className="mb-5">잠시만 기다려주세요...</div>
						<div className="text-center">
							<CircularProgress />
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Loading
