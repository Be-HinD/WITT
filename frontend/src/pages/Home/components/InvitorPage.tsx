import UserProfile from './UserProfile'
import avatar from '../assets/avatar.gif'
import background from '../assets/background_main.gif'
import { useEffect, useState } from 'react'
import { userstate } from '../../../components/StateVariables'
import { useParams } from 'react-router'
import { otherUserData } from './API'

const mainStyleClass = 'z-10 w-full h-screen px-[14px] py-[22px] bg-[#111111]'

const initValue = {
	id: -1,
	profileImg: avatar,
	userName: 'guest',
	bottle: 0,
	growthPoint: 0,
	solvedCnt: 0,
	rank: 0,
	follower: false,
	following: false,
}

const InvitorPage = () => {
	const characters = userstate((state) => state.characters)
	const character = userstate((state) => state.character)
	const [userdata, setUserData] = useState(initValue)

	const params = useParams()
	const getInvitorData = async () => {
		const token = localStorage.getItem('token')!
		const userId: number = +params.id!
		otherUserData(token, userId).then((value) => {
			setUserData(value.data)
		})
	}

	useEffect(() => {
		if (params.id) {
			getInvitorData()
		}
	}, [userdata])

	return (
		<>
			<img
				className="w-full h-full max-w-screen-sm max-h-screen-sm"
				style={{ position: 'absolute', opacity: '0.3' }}
				src={background}
			/>
			<div
				style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}
				className={mainStyleClass}
			>
				{UserProfile(userdata)}
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<img style={{ filter: 'brightness(1.3)', cursor: 'pointer' }} src={characters[character]} />
				</div>
				<div className="flex w-[200px] h-[50px] justify-around">
					<div className="w-[80px] h-[20px] flex justify-center items-center bg-[#ff0000] text-[#ffffff] text-xs">
						1
					</div>
					<div className="w-[80px] h-[20px] flex justify-center items-center bg-[#0000ff] text-[#ffffff] text-xs">
						2
					</div>
				</div>
			</div>
		</>
	)
}

export default InvitorPage
