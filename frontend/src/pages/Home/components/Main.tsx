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

const mainStyleClass = 'z-10 w-[22.5rem] h-[50rem] px-[14px] py-[22px] bg-[#111111]'

function Main() {
	return (
		<>
			<img style={{ position: 'absolute', opacity: '0.3', width: '360px', height: '800px' }} src={background} />
			{/* <div style={mainStyle}> */}
			<div
				style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}
				className={mainStyleClass}
			>
				<UserProfile />
				<img style={{ filter: 'brightness(1.3)' }} src={character} />
				<ActionBar />
			</div>
		</>
	)
}

export default Main
