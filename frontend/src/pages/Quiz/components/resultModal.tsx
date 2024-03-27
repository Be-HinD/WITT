// import { HeartEmoji, DropletEmoji, SunEmoji, SadEmoji, SadCatEmoji } from '../assets/Emojis'
// import Header from '../../../components/Header'
// import { IMenu, IMenuFunc } from '../../../components/interfaces'
// import { icons } from '../../../constants/header-icons'
// import { useNavigate } from 'react-router-dom'
// import { useEffect, useState } from 'react'

// const ResultModal = () => {
// 	const navigate = useNavigate()
// 	const menu: IMenu = { left: icons.BACK, center: '퀴즈', right: undefined }
// 	const func: IMenuFunc = { left_func: () => navigate('/'), right_func: undefined }
// 	const [result, setResult] = useState(false)
// 	const [resultComment, setResultComment] = useState<string | undefined>(undefined)
// 	const [rightAnswer, setRightAnswer] = useState()
// 	const [wrongAnswer, setWrongAnswer] = useState()
// 	const [emoji, setEmoji] = useState<string>()

// 	useEffect(() => {
// 		if (result === true) {
// 			setResultComment('정답입니다')
// 			setRightAnswer(() => {
// 				const num = Math.random()
// 				if (num < 1 / 3) {
// 					setEmoji('sun')
// 				} else if (num < 2 / 3) {
// 					setEmoji('love')
// 				} else if (num < 1) {
// 					setEmoji('water')
// 				}
// 			})
// 		} else if (result === false) {
// 			setResultComment('땡! 아쉬워요..')
// 			setWrongAnswer(() => {
// 				const num = Math.random()
// 				if (num < 1 / 2) {
// 					setEmoji('sad')
// 				} else if (num < 1) {
// 					setEmoji('sadcat')
// 				}
// 			})
// 		}
// 	}, [result])

// 	return (
// 		<div>
// 			<div>
// 				<Header menu={menu} func={func} />
// 				<body>
// 					<div>{resultComment}</div>
// 					<div>{}</div>

// 					<button>배출방법 확인하기</button>
// 				</body>
// 			</div>
// 		</div>
// 	)
// }

// export default ResultModal
