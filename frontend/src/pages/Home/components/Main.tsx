import UserProfile from './UserProfile'
import ActionBar from './ActionBar'
import background from '../assets/background_main.gif'
import { useEffect, useState } from 'react'
import { userstate } from '../../../components/StateVariables'
import { Cookies } from 'react-cookie'
import { getToken, getUserData } from './API'

const mainStyleClass = 'z-10 w-full h-screen px-[14px] py-[22px] bg-[#111111]'

const noticeStyleClass = {
	zIndex: '20',
	position: 'absolute',
	width: '60%',
	height: '60px',
	top: '20%',
	left: '15%',
	padding: '20px 30px',
	backgroundColor: '#1cd44d',
	borderRadius: '50px',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	color: '#ffffff',
	fontSize: '12px',
	fontWeight: '900',
	boxShadow: '0px 0px 15px 3px #F2FCFC',
	transform: 'scaleX(0)',
} as React.CSSProperties

// const buttonStyleClass = `
// flex justify-center items-center
// z-[5]
// w-[9.375rem] h-[3.125rem]
// rounded-[15px]
// bg-[#3E3E3E]
// text-[#ffffff]
// text-base
// font-semibold
// border border-[#ffffff]
// hover:scale-110
// hover:bg-[#CE0CE0]
// hover:transition-all
// hover:cursor-pointer
// transition ease-in-out duration-200
// `

const Main = () => {
	const cookie = new Cookies()
	// const notices = userstate((state) => state.notices)
	// const setNotices = userstate((state) => state.setNotices)
	const newNotice = userstate((state) => state.newNotice)
	const setNewNotice = userstate((state) => state.setNewNotice)

	const characters = userstate((state) => state.characters)
	const character = userstate((state) => state.character)
	const mydata = userstate((state) => state.mydata)
	const levels = userstate((state) => state.levels)

	const [noticeEffect, setNoticeEffect] = useState(noticeStyleClass)
	const [userdata, setUserData] = useState(mydata)

	const notify = () => {
		if (newNotice !== '') {
			setTimeout(() => {
				setNoticeEffect({ ...noticeEffect, transform: 'scaleX(1)', transition: 'all 0.2s ease-out' })
			}, 500)
			setTimeout(() => {
				setNoticeEffect({ ...noticeEffect, transform: 'scaleX(0)', transition: 'all 0.2s ease-out' })
			}, 3500)
		}
	}

	const getMyStatus = (state: string) => {
		setNewNotice(`현재 캐릭터의 레벨은 ${state}입니다. 물을 주어 캐릭터를 성장시키세요!`)
		notify()
	}

	const getData = async () => {
		if (cookie.get('refresh_token')) {
			getToken(cookie.get('refresh_token')!).then((value) => {
				localStorage.setItem('token', value.data)
				getUserData(value.data).then((result) => {
					localStorage.setItem('mydata', JSON.stringify(result.data))
					setUserData(result.data)
				})
			})
		}
	}

	useEffect(() => {
		getData()
		if (localStorage.getItem('mydata')) {
			setUserData(JSON.parse(localStorage.getItem('mydata')!))
		}
	}, [mydata])

	return (
		<>
			<img
				className="w-full h-full max-w-screen-sm max-h-screen-sm"
				style={{ position: 'absolute', opacity: '0.3' }}
				src={background}
			/>
			<div style={noticeEffect}>{newNotice}</div>
			<div
				style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}
				className={mainStyleClass}
			>
				{UserProfile(userdata)}
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<img
						style={{ filter: 'brightness(1.3)', cursor: 'pointer' }}
						src={characters[character]}
						onClick={() => {
							getMyStatus(`${levels[~~(mydata.growthPoint / 10)]}`)
						}}
					/>
				</div>
				{ActionBar(userdata)}
			</div>
		</>
	)
}

export default Main
