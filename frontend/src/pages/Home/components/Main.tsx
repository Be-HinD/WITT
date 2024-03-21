import UserProfile from './UserProfile'
import ActionBar from './ActionBar'
import character from '../assets/tree.png'
import background from '../assets/background_main.gif'

// const mainStyle = {
// 	zIndex: '10',
// 	width: '360px',
// 	height: '800px',
// 	padding: '22px 14px',
// 	backgroundColor: 'rgba(17, 17, 17)',
// 	display: 'flex',
// 	flexDirection: 'column',
// 	justifyContent: 'space-between',
// 	alignItems: 'center',
// } as React.CSSProperties

// const buttonStyle = {
// 	zIndex: '5',
// 	width: '150px',
// 	height: '50px',
// 	borderRadius: '15px',
// 	backgroundColor: '#3E3E3E',
// 	border: '1px #ffffff solid',
// 	display: 'flex',
// 	justifyContent: 'center',
// 	alignItems: 'center',
// 	color: '#ffffff',
// 	fontSize: '16px',
// 	fontWeight: '600',
// } as React.CSSProperties

const mainStyleClass = 'z-10 w-full h-screen px-[14px] py-[22px] bg-[#111111]'

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

function Main() {
	// const [buttonEffect, setButtonEffect] = useState(buttonStyle)
	// const enterHandler = () => {
	// 	setButtonEffect({
	// 		...buttonEffect,
	// 		transform: 'scale(1.1)',
	// 		backgroundColor: '#ce0ce0',
	// 		transitionProperty: 'background-color scale',
	// 		transitionDuration: '200ms',
	// 	})
	// }
	// const leaveHandler = () => {
	// 	setButtonEffect({
	// 		...buttonEffect,
	// 		transform: 'scale(1)',
	// 		cursor: 'pointer',
	// 		backgroundColor: '#3e3e3e',
	// 		transitionProperty: 'background-color scale',
	// 		transitionDuration: '200ms',
	// 	})
	// }
	return (
		<>
			<img
				className="w-full h-full max-w-screen-sm max-h-screen-sm"
				style={{ position: 'absolute', opacity: '0.3' }}
				src={background}
			/>
			{/* <div style={mainStyle}> */}
			<div
				style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}
				className={mainStyleClass}
			>
				<UserProfile />
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<img style={{ filter: 'brightness(1.3)' }} src={character} />
				</div>
				<div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', transform: 'translateY(100%)' }}>
					{/* <div style={buttonEffect} onMouseEnter={enterHandler} onMouseLeave={leaveHandler}> */}
					<div
						className={buttonStyleClass}
						onClick={() => {
							/* 퀴즈 페이지로 라우팅 */
						}}
					>
						{'퀴즈 풀러 가기'}
					</div>
					<div
						className={buttonStyleClass}
						onClick={() => {
							/* 팔로잉 팔로워 페이지로 라우팅 */
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
