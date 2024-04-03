import axios from 'axios'
import { useNavigate } from 'react-router-dom'
interface IAlarmProps {
	notificationId: number
	event: string
	senderId: number
	time: string
	img: string
	username: string
}
const AlarmItem = ({ props }: { props: IAlarmProps }) => {
	// const token = localStorage.getItem('token')
	const token =
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcmFpc2luZ2R1c3Qvb2lqYWZkLmNvbSIsImlhdCI6MTcxMTgwNDczMSwiZXhwIjoxNzEzMDE0MzMxLCJzdWIiOiIxMDMiLCJpZCI6MTAzfQ.GT7Jl-QFkIjQECd0ikkt3hnhuUBoyJVTFCBUwKjFEwk'
	const navigate = useNavigate()
	const handleCheckAlarm = () => {
		axios
			.put(`${import.meta.env.VITE_BASE_URL}/notices/${props.notificationId}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				console.log(response.data)
				// 해당 유저의 캐릭터 페이지로
				navigate(`/${props.senderId}`)
			})
			.catch((error) => {
				console.error('Error: ', error)
			})
	}

	return (
		<div className="flex items-center hover:bg-stone-800" onClick={handleCheckAlarm}>
			<div>
				<img src={props.img} alt="" className="rounded-full w-12 mx-4 my-4" />
			</div>
			{props.event === 'follow' ? (
				<div className="text-white">{`${props.username}님이 당신을 팔로우해요`}</div>
			) : (
				<div className="text-white">{`${props.username}님에게 콕 찔렸어요!`}</div>
			)}
		</div>
	)
}

export default AlarmItem
