import { useState, useEffect, useRef } from 'react'
export default function Camera() {
	const [streaming, setStreaming] = useState(false)
	const [width, setWidth] = useState(window.innerWidth)
	const [height, setHeight] = useState(0)
	const videoRef = useRef(null)
	const canvasRef = useRef(null)

	useEffect(() => {
		const initCamera = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: { facingMode: 'user' },
					// video: {facingMode: {exact : 'environment' }} //후면
				})
				videoRef.current.srcObject = stream
				videoRef.current.play()
				setStreaming(true)
			} catch (error) {
				console.error('Error accessing camera:', error)
			}
		}
		if (!streaming) {
			initCamera()
		}

		return () => {
			if (streaming) {
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
		if (!streaming) {
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
		const canvas = canvasRef.current
		const video = videoRef.current
		const canvasContext = canvas.getContext('2d')

		canvas.width = width
		canvas.height = height
		canvasContext.drawImage(video, 0, 0, width, height)

		const data = canvas.toDataURL('image/png')
	}

	return (
		<div>
			<div>
				<canvas ref={canvasRef}></canvas>
				<video ref={videoRef} autoPlay loop muted onCanPlay={handleCanPlay} className="-scale-x-100">
					<source src="" />
				</video>
			</div>
			<button onClick={captureImage} className="w-10 h-10">
				촬영
			</button>
		</div>
	)
}
