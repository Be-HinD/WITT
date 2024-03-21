import { useState, useEffect, useRef } from 'react'
const CameraPage = () => {
	const [width, setWidth] = useState(window.innerWidth) // 화면 크기를 전체 차지하게
	const [height, setHeight] = useState(0)

	const [isStreaming, setIsStreaming] = useState(false)
	const [isTaken, setIsTaken] = useState(false)

	const [capturedImage, setCapturedImage] = useState<string | undefined>(undefined)

	const videoRef = useRef<HTMLVideoElement>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	// 윈도우 사이즈 바꾸면 자동으로 변경
	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth)
			// setHeight(width * 0.75) // 컴퓨터 사진 비율 3:4 고정
			setHeight(width * 1.25) // 핸드폰 사진 비율 4:3 고정
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [width])

	// 카메라 세팅
	useEffect(() => {
		const videoElement = videoRef.current

		const initCamera = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					// video: { facingMode: 'user' }, // 전면
					video: { facingMode: { exact: 'environment' } }, // 후면
				})
				if (videoRef && videoElement) {
					videoElement.srcObject = stream
					videoElement.play() // 카메라 재생하기

					// setHeight(width * 0.75) // 컴퓨터 사진 비율 3:4 고정
					setHeight(width * 1.25) // 핸드폰 사진 비율 4:3 고정
					setIsStreaming(true)
				}
			} catch (error) {
				console.error('Error accessing camera: ')
			}
		} // 카메라 설치하기

		if (!isStreaming) {
			initCamera()
		} // 재생되고 있지 않으면 카메라 설치를 한다

		// cleanup 카메라 철수 - dev 에서는 안 되는데 배포에서는 됨.
		return () => {
			if (isStreaming && videoElement?.srcObject instanceof MediaStream) {
				videoElement.srcObject.getTracks().forEach((track) => track.stop())
				setIsStreaming(false)
			}
		}
	}, [isStreaming, width])

	const handleCaptureImage = () => {
		const videoElement = videoRef.current
		const canvasElement = canvasRef.current
		const canvasContext = canvasElement?.getContext('2d')

		if (videoElement && canvasElement) {
			// 캔버스의 크기를 카메라와 동일하게 만든다
			canvasElement.height = height
			canvasElement.width = width
			canvasContext?.drawImage(videoElement, 0, 0, width, height)

			const data = canvasElement.toDataURL('image/png')
			setCapturedImage(data)

			console.log('w', width)
			console.log('h', height)

			if (!isTaken) {
				setIsTaken(true) // 찍는다
				videoElement.pause()
			} else {
				setIsTaken(false) // 다시 카메라 켠다
				videoElement.play()
			}
		}
	}

	return (
		<div>
			<div>
				<video ref={videoRef} autoPlay loop muted className="-scale-x-100 w-full">
					<source src="" />
					<canvas ref={canvasRef} className="w-full"></canvas>
				</video>
			</div>
			<div>
				<button onClick={handleCaptureImage} className="w-10 h-10">
					{!isTaken ? <div>사진찍기</div> : <div>다시찍기</div>}
				</button>
			</div>
			<div>{isTaken ? <button>현재 사진으로 퀴즈 풀기</button> : null}</div>
			<div>
				<img src={capturedImage} alt="" className={`w-[${width}px] h-[${height}px] -scale-x-100`} />
				미리보기
			</div>
		</div>
	)
}
export default CameraPage
