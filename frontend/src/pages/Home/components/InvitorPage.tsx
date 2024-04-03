import UserProfile from './UserProfile'
import avatar from '../assets/avatar.gif'
import background from '../assets/background_main.gif'
import { useEffect, useState } from 'react'
import { userstate } from '../../../components/StateVariables'
import { useParams } from 'react-router'
import { kock, otherUserData } from './API'

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

const followButtonStyleClass = `
w-[80px] h-[60px] 
rounded-[10px] 
flex justify-center items-center 
text-[#ffffff] text-xs 
`

const InvitorPage = () => {
	const characters = userstate((state) => state.characters)
	const character = userstate((state) => state.character)
	const [userdata, setUserData] = useState(initValue)
	const [kockEffect, setKockEffect] = useState('brightness-[1.3] cursor-pointer')

	const params = useParams()

	const getInvitorData = async () => {
		const token = localStorage.getItem('token')!
		const userId: number = +params.id!
		otherUserData(token, userId).then((value) => {
			setUserData(value.data)
		})
	}

	const makekock = async () => {
		const token = localStorage.getItem('token')!
		const userId: number = +params.id!
		kock(token, userId).then((value) => {
			if (value) {
				setTimeout(() => {
					setKockEffect(kockEffect.replace('brightness-[1.3]', 'brightness-[1.7]'))
				}, 300)
				setTimeout(() => {
					setKockEffect(kockEffect.replace('brightness-[1.7]', 'brightness-[1.3]'))
				}, 800)
			}
		})
	}

	useEffect(() => {
		if (params.id) {
			getInvitorData()
		}
	}, [])

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
				<div
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
					onClick={() => {
						makekock()
					}}
				>
					<img className={kockEffect} src={characters[character]} />
				</div>
				<div className="flex w-[200px] h-[100px] justify-around">
					<div
						className={
							userdata.follower ? followButtonStyleClass + 'bg-[#eb42d1]' : followButtonStyleClass + 'bg-[#cc99c4]'
						}
					>
						{userdata.follower ? '팔로잉중' : '언팔로잉'}
					</div>
					<div
						className={
							userdata.following ? followButtonStyleClass + 'bg-[#28edd6]' : followButtonStyleClass + 'bg-[#97bfbb]'
						}
					>
						{userdata.following ? '팔로우중' : '언팔로우'}
					</div>
				</div>
			</div>
		</>
	)
}

export default InvitorPage