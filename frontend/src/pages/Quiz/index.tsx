import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../components/Header'
import { IMenu, IMenuFunc } from '../../components/interfaces'
import { icons } from '../../constants/header-icons'
import HowToUse from './components/HowToUse'

const Quiz = () => {
	const [capturedImage, setCapturedImage] = useState<File | undefined>(undefined)
	const handleCaptureImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			setCapturedImage(file)
		}
	}
	const navigate = useNavigate()
	const menu: IMenu = { left: icons.BACK, center: '퀴즈', right: undefined }
	const func: IMenuFunc = { left_func: () => navigate('/'), right_func: undefined }
	return (
		<div>
			<Header menu={menu} func={func}></Header>
			<body>
				<p className="pt-20">
					{capturedImage ? (
						<img src={URL.createObjectURL(capturedImage)} />
					) : (
						<div>
							<HowToUse />
						</div>
					)}
				</p>
				<label
					htmlFor="camera"
					className="text-white font-semibold text-lg bg-purple-800 rounded-full px-6 py-2 leading-9 hover:bg-purple-500 transition-colors self-center mb-4"
				>
					사진찍고 퀴즈 풀어보기
				</label>
				<input
					id="camera"
					type="file"
					accept="image/*"
					capture="environment"
					onChange={handleCaptureImage}
					className="hidden"
				/>
			</body>
		</div>
	)
}

export default Quiz
