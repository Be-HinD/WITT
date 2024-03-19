import { useState, useEffect, useRef } from 'react'
const CameraPage = () => {
	const [streaming, setStreaming] = useState(false)
	const [width, setWidth] = useState(window.innerWidth)
	const [height, setHeight] = useState(0)
	const [isInitialized, setIsInitialized] = useState(false)
	const [isTaken, setIsTaken] = useState(false)

	const videoRef = useRef<HTMLVideoElement>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const initCamera = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: { facingMode: 'user' },
					// video: { facingMode: { exact: 'environment' } }, //후면
				})
				if (videoRef && videoRef.current) {
					videoRef.current.srcObject = stream
					videoRef.current.play()
					setStreaming(true)
				}
				setIsInitialized(true)
			} catch (error) {
				console.error('Error accessing camera:', error)
			}
		}
		if (!streaming) {
			initCamera()
		}

		return () => {
			if (streaming && videoRef?.current?.srcObject instanceof MediaStream) {
				videoRef.current.srcObject.getTracks().forEach((track) => track.stop())
				setStreaming(false)
			}
		}
	}, [streaming])

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleCanPlay = () => {
		if (!streaming && videoRef.current) {
			const video = videoRef.current
			const aspectRatio = video.videoWidth / video.videoHeight
			let newHeight = width / aspectRatio

			if (isNaN(newHeight)) {
				newHeight = width / (4 / 3)
			}

			setHeight(newHeight)
		}
	}

	const captureImage = () => {
		if (canvasRef.current && videoRef.current) {
			const canvas = canvasRef.current
			const video = videoRef.current
			const canvasContext = canvas.getContext('2d')

			canvas.width = width
			canvas.height = height
			canvasContext?.drawImage(video, 0, 0, width, height)

			video.pause()
			setIsTaken(true)

			// const data = canvas.toDataURL('image/png')

			// 촬영한 사진 저장하고 퀴즈 생성
			// const saveImageAndGo = () => {

			// }
		}
	}

	// 사진을 다시 찍고 싶을 때
	const replayVideo = () => {
		setIsTaken(false)
		if (videoRef?.current && isInitialized) {
			videoRef.current.play()
		}
	}

	return (
		<div>
			<div>
				<canvas ref={canvasRef}></canvas>
				<video ref={videoRef} autoPlay loop muted onCanPlay={handleCanPlay} className="-scale-x-100">
					<source src="" />
				</video>
			</div>
			<div>
				{!isTaken ? (
					<button onClick={captureImage} className="w-10 h-10">
						사진 찍기
					</button>
				) : (
					<button onClick={replayVideo} className="w-10 h-10">
						다시 찍기
					</button>
				)}
			</div>
			<div>{isTaken ? <button>현재 사진으로 퀴즈 풀기</button> : null}</div>
		</div>
	)
}

export default CameraPage
