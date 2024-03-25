import UserProfile from './UserProfile'
import ActionBar from './ActionBar'
import character from '../assets/tree.png'
import background from '../assets/background_main.gif'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userstate } from '../../../components/StateVariables'

const mainStyleClass = 'z-10 w-full h-screen px-[14px] py-[22px] bg-[#111111]'

const noticeStyleClass = {
	zIndex: '20',
	position: 'absolute',
	width: '80%',
	height: '60px',
	top: '55%',
	left: '10%',
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

const buttonStyleClass = `
flex justify-center items-center 
z-[5] 
w-[9.375rem] h-[3.125rem] 
rounded-[15px]
bg-[#3E3E3E] 
text-[#ffffff]
text-base 
font-semibold
border border-[#ffffff] 
hover:scale-110 
hover:bg-[#CE0CE0] 
hover:transition-all 
hover:cursor-pointer 
transition ease-in-out duration-200 
`

const Main = () => {
	const navigate = useNavigate()
	const [noticeEffect, setNoticeEffect] = useState(noticeStyleClass)

	const notices = userstate((state) => state.notices)
	const isNewNotice = userstate((state) => state.isNewNotice)
	const setIsNewNotice = userstate((state) => state.setIsNewNotice)

	useEffect(() => {
		setIsNewNotice()
		if (isNewNotice) {
			notices?.map(() => {})
		}
		const starttimer = setTimeout(() => {
			setNoticeEffect({ ...noticeEffect, transform: 'scaleX(1)', transition: 'all 0.2s ease-out' })
		}, 500)
		const endtimer = setTimeout(() => {
			setNoticeEffect({ ...noticeEffect, transform: 'scaleX(0)', transition: 'all 0.2s ease-out' })
		}, 3500)
		return () => {
			clearTimeout(starttimer)
			clearTimeout(endtimer)
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
				style={noticeEffect}
				onClick={() => {
					navigate('/follow')
				}}
			>
				{`여기에 알림이 표시되었다 사라집니다.여기에 알림이 표시되었다 사라집니다.여기에 알림이 표시되었다
				사라집니다.여기에 알림이 표시되었다 사라집니다.`}
			</div>
			<div
				style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}
				className={mainStyleClass}
			>
				<UserProfile />
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<img style={{ filter: 'brightness(1.3)' }} src={character} />
				</div>
				<div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', transform: 'translateY(100%)' }}>
					<div
						className={buttonStyleClass}
						onClick={() => {
							navigate('/quiz')
						}}
					>
						{'퀴즈 풀러 가기'}
					</div>
					<div
						className={buttonStyleClass}
						onClick={() => {
							navigate('/follow')
						}}
					>
						{'콕 찌르러 가기'}
					</div>
				</div>
				<ActionBar />
			</div>
		</>
	)
}

export default Main
