import { Link } from 'react-router-dom'
import { useState } from 'react'
const Quiz = () => {
	const [capturedImage, setCapturedImage] = useState<File | undefined>(undefined)
	const handleCaptureImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			setCapturedImage(file)
		}
	}
	return (
		<div>
			<p>Quiz Page</p>
			<p>사용방법</p>
			<p>
				<input type="file" accept="image/*" capture="environment" onChange={handleCaptureImage} />

				{capturedImage ? <img src={URL.createObjectURL(capturedImage)} /> : <div>사진 없음</div>}
			</p>
			{/* <Link
				to="/quiz/camera"
				className="bg-green-700 text-white rounded-full px-2 py-1 leading-9 hover:bg-green-500 transition-colors"
			>
				사진
			</Link> */}
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
