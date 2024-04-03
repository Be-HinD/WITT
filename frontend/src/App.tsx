import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ToastContainer, toast } from 'react-toastify'
import { EventSourcePolyfill } from 'event-source-polyfill'
import { useSSEStore } from './pages/Alarm/store'
import { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	const token = localStorage.getItem('token')
	const { setLastEventId } = useSSEStore()
	const EventSource = EventSourcePolyfill

	useEffect(() => {
		if (!token) {
			console.log('')
		} else {
			const source = new EventSource(`${import.meta.env.VITE_BASE_URL}/sse/subscribe`, {
				headers: {
					Authorization: `Bearer ${token}`,
					// 'Cache-Control': 'no-cache',
					Connection: 'keep-alive',
					// 'Last-Event-ID': lastEventId,
				},
				heartbeatTimeout: 3600000,
			})

			source.onopen = () => {
				console.log('연결 성공')
			}

			source.onerror = (error) => {
				console.log(error)
				source.close()
			}

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			source.addEventListener('follow', (e: any) => {
				const data = JSON.parse(e.data)
				setLastEventId(data.notificationId)
				console.log(data)
				toast(data.message)
			})

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			source.addEventListener('kock', (e: any) => {
				const data = JSON.parse(e.data)
				setLastEventId(data.notificationId)
				console.log(data)
				toast(data.message)
			})

			return () => {
				source.close()
			}
		}
	}, [])

	return (
		<div>
			<ToastContainer position="top-center" />
			<RouterProvider router={router} />
		</div>
	)
}

export default App
