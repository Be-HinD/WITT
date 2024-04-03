import { useEffect, useState } from 'react'
import axios from 'axios'
import AlarmItem from './components/AlarmItem'
import Header from '../../components/Header'
import { IMenu, IMenuFunc } from '../../components/interfaces'
import { icons } from '../../constants/header-icons'
import { useNavigate } from 'react-router-dom'
import { EventSourcePolyfill } from 'event-source-polyfill'
import { useSSEStore } from './store'

interface IAlarm {
	notificationId: number
	event: string
	senderId: number
	time: string
	senderImg: string
	senderName: string
}
const AlarmPage = () => {
	const navigate = useNavigate()
	const menu: IMenu = { left: icons.BACK, center: '알림함', right: undefined }
	const func: IMenuFunc = { left_func: () => navigate('/'), right_func: undefined }
	const token = localStorage.getItem('token')

	const [alarmList, setAlarmList] = useState<IAlarm[]>()
	console.log('리스트 전체', alarmList)
	const fetchAlarmList = () => {
		axios
			.get(`${import.meta.env.VITE_BASE_URL}/notices`, { headers: { authorization: `Bearer ${token}` } })
			.then((response) => {
				setAlarmList(response.data.data.content)
			})
			.catch((error: unknown) => {
				console.error('Error:', error)
			})
	}

	const { setLastEventId } = useSSEStore()
	const EventSource = EventSourcePolyfill

	useEffect(() => {
		fetchAlarmList()
	}, [])

	useEffect(() => {
		if (!token) {
			window.alert('로그인 후 이용이 가능한 서비스입니다.')
			navigate('/')
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
				// console.log('연결 성공')
			}

			source.onerror = (error) => {
				console.log(error)
				source.close()
			}

			source.addEventListener('message', (e) => {
				const data = JSON.parse(e.data)
				setLastEventId(data.notificationId)
			})

			return () => {
				source.close()
			}
		}
	}, [])

	return (
		<div>
			<Header menu={menu} func={func}></Header>
			{alarmList && alarmList.length > 0 ? (
				<div className="pt-16">
					{alarmList.map((item) => (
						<AlarmItem props={item} key={item.notificationId} />
					))}
				</div>
			) : (
				<div className="text-white pt-20 mx-5 text-center">알림함이 비었어요 💨</div>
			)}
		</div>
	)
}

export default AlarmPage

// const dummy = [
// 	{
// 		notificationId: 1,
// 		img: 'https://avatars.githubusercontent.com/u/125720796?v=4',
// 		username: '지연',
// 		event: 'kock',
// 		senderId: 1,
// 		time: '2024-04-01T20:37:02.527458',
// 	},
// 	{
// 		notificationId: 2,
// 		img: 'https://avatars.githubusercontent.com/u/125720796?v=4',
// 		username: '냠냠',
// 		event: 'kock',
// 		senderId: 2,
// 		time: '2024-04-01T20:37:02.527458',
// 	},
// 	{
// 		notificationId: 3,
// 		img: 'https://avatars.githubusercontent.com/u/125720796?v=4',
// 		username: '상수',
// 		event: 'kock',
// 		senderId: 3,
// 		time: '2024-04-01T20:37:02.527458',
// 	},
// ]
