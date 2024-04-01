import { useEffect, useState } from 'react'
import axios from 'axios'
import AlarmItem from './AlarmItem'
import Header from '../../components/Header'
import { IMenu, IMenuFunc } from '../../components/interfaces'
import { icons } from '../../constants/header-icons'
import { useNavigate } from 'react-router-dom'
import { EventSourcePolyfill } from 'event-source-polyfill'
import { useSSEStore } from './store'

interface IAlarm {
	id: number
	userName: string
	content: string
}

const AlarmPage = () => {
	const navigate = useNavigate()
	const menu: IMenu = { left: icons.BACK, center: '알림함', right: undefined }
	const func: IMenuFunc = { left_func: () => navigate('/'), right_func: undefined }
	const token = localStorage.getItem('token')
	const [alarmList, setAlarmList] = useState<IAlarm[] | null>()
	const fetchAlarmList = () => {
		axios
			.get(`${import.meta.env.VITE_API_BASE_URL}/notices`, { headers: { authorization: `Bearer ${token}` } })
			.then((response) => {
				console.log(response.data)
				setAlarmList(response.data)
			})
	}

	const { setLastEventId } = useSSEStore()
	const EventSource = EventSourcePolyfill

	useEffect(() => {
		fetchAlarmList()
	})

	useEffect(() => {
		if (!token) {
			navigate('/')
		} else {
			const source = new EventSource(`${import.meta.env.VITE_API_BASE_URL}/sse/subscribe`, {
				headers: {
					Authorization: `Bearer ${token}`,
					'Cache-Control': 'no-cache',
					Connection: 'keep-alive',
				},
				heartbeatTimeout: 3600000,
			})

			source.onerror = (error) => {
				console.log(error)
				source.close()
			}

			source.addEventListener('message', (e) => {
				console.log(e)
				const data = JSON.parse(e.data)
				console.log(data)
				setLastEventId(data.id) // 응답 확인해서 수정
			})

			return () => {
				source.close()
			}
		}
	})
	return (
		<div>
			<Header menu={menu} func={func}></Header>
			<div className="pt-12">
				<AlarmItem />
				<AlarmItem />
				<AlarmItem />
				<AlarmItem />
				{alarmList &&
					alarmList.map(() => {
						return <AlarmItem />
					})}
			</div>
		</div>
	)
}

export default AlarmPage
