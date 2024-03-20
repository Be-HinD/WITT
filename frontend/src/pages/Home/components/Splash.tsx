import { useEffect, useState } from 'react'
import logo from '../assets/mainlogo.png'
import login from '../assets/login.png'
import Cloud from './Cloud'
import { mainstate } from '../../../components/StateVariables'

// const mainStyle = {
// 	width: '360px',
// 	height: '800px',
// 	backgroundColor: 'rgba(17, 17, 17)',
// 	display: 'flex',
// 	flexDirection: 'column',
// 	justifyContent: 'center',
// 	alignItems: 'center',
// } as React.CSSProperties

// const loginTitle = {
// 	display: 'flex',
// 	justifyContent: 'center',
// 	alignItems: 'center',
// 	color: 'white',
// 	fontSize: '60px',
// 	fontWeight: '900',
// 	transform: 'translateY(200%)',
// } as React.CSSProperties

// const logoStyle = {
// 	display: 'flex',
// 	justifyContent: 'center',
// 	alignItems: 'center',
// 	opacity: '0',
// 	transform: 'scale(0) translateY(10%)',
// } as React.CSSProperties

// const buttonStyle = {
// 	display: 'flex',
// 	cursor: 'pointer',
// 	opacity: '0',
// } as React.CSSProperties

const mainStyleClass = 'w-[22.5rem] h-[50rem] bg-[#111111]'

const loginTitleClass = 'flex justify-center items-center text-[#ffffff] text-[60px] font-black translate-y-[12.5rem]'

const logoStyleClass = 'flex justify-center items-center opacity-0 translate-y-[2.5rem] scale-0'

const buttonStyleClass = 'flex justify-center opacity-0 cursor-pointer'

function Splash() {
	// const [titleEffect, setTitleEffect] = useState(loginTitle)
	// const [logoEffect, setLogoEffect] = useState(logoStyle)
	// const [buttonEffect, setButtonEffect] = useState(buttonStyle)
	const [titleEffect, setTitleEffect] = useState(loginTitleClass)
	const [logoEffect, setLogoEffect] = useState(logoStyleClass)
	const [buttonEffect, setButtonEffect] = useState(buttonStyleClass)
	const { setIsLogin } = mainstate()

	useEffect(() => {
		const timer1 = setTimeout(() => {
			// setTitleEffect({
			// 	...titleEffect,
			// 	transform: 'translateY(0%)',
			// 	transition: 'all 1s',
			// })
			setTitleEffect(titleEffect.replace('translate-y-[12.5rem]', 'translate-y-0') + ' transition-all duration-1000')
		}, 1000)
		const timer2 = setTimeout(() => {
			// setLogoEffect({
			// 	...logoEffect,
			// 	transform: 'scale(1) translateY(0%)',
			// 	opacity: '1',
			// 	transition: 'all 1s',
			// })
			// setButtonEffect({ ...buttonEffect, opacity: '1', transition: 'all 1s' })
			setLogoEffect(
				logoEffect.replace('opacity-0 translate-y-[2.5rem] scale-0', 'opacity-100 translate-y-0 scale-100') +
					' transition-all duration-1000'
			)
			setButtonEffect(buttonEffect.replace('opacity-0', 'opacity-100') + ' transition-all duration-1000')
		}, 2000)
		return () => {
			clearTimeout(timer1)
			clearTimeout(timer2)
		}
	}, [])

	return (
		// <div style={mainStyle}>
		<div
			style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
			className={mainStyleClass}
		>
			{/* <div style={titleEffect}> */}
			<div className={titleEffect}>
				{Cloud(20, 150)}
				<div style={{ zIndex: '2' }}>WITT</div>
			</div>
			{/* <div style={logoEffect}> */}
			<div className={logoEffect}>
				{Cloud(48, 250)}
				<img style={{ zIndex: '2' }} src={logo} />
			</div>
			{/* <img style={buttonEffect} onClick={() => {}} src={login} /> */}
			<div className={buttonEffect}>
				<img
					onClick={() => {
						setIsLogin(true)
					}}
					src={login}
				/>
			</div>
		</div>
	)
}

export default Splash
