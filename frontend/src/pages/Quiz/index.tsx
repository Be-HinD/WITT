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
			<div>
				<div className="pt-20 flex flex-col items-center justify-center ">
					{capturedImage ? (
						<img src={URL.createObjectURL(capturedImage)} className="my-4" />
					) : (
						<div>
							<HowToUse />
						</div>
					)}
				</div>
				{capturedImage ? (
					<div className="flex justify-center">
						<label htmlFor="camera">
							<div className="text-white font-semibold text-lg bg-purple-800 rounded-full px-6 py-2 leading-9 hover:bg-purple-500 transition-colors mb-4 mr-3">
								다시 찍기
							</div>
						</label>
						<div className="text-white font-semibold text-lg bg-purple-800 rounded-full px-6 py-2 leading-9 hover:bg-purple-500 transition-colors mb-4">
							제출하고 퀴즈 풀기
						</div>
					</div>
				) : (
					<label htmlFor="camera" className="flex justify-center">
						<div className="text-white font-semibold text-lg bg-purple-800 rounded-full px-6 py-2 leading-9 hover:bg-purple-500 transition-colors mb-4 ">
							사진 찍고 퀴즈 풀어보기
						</div>
					</label>
				)}
				<input
					id="camera"
					type="file"
					accept="image/*"
					capture="environment"
					onChange={handleCaptureImage}
					className="hidden"
				/>
			</div>
		</div>
	)
}

export default Quiz
