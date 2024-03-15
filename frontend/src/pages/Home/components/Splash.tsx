import React, { useEffect, useState } from 'react'
import logo from '../assets/mainlogo.png'
import login from '../assets/login.png'
import Cloud from './Cloud'
import { mainstate } from '../../../components/StateVariables'

const mainstyle = {
	width: '360px',
	height: '800px',
	backgroundColor: 'rgba(17, 17, 17)',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
} as React.CSSProperties

const logintitle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: 'white',
	fontSize: '60px',
	fontWeight: '900',
	transform: 'translateY(200%)',
} as React.CSSProperties

const logostyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	opacity: '0',
	transform: 'scale(0) translateY(10%)',
} as React.CSSProperties

const buttonstyle = {
	display: 'flex',
	cursor: 'pointer',
	opacity: '0',
} as React.CSSProperties

function Splash() {
	const [titleEffect, setTitleEffect] = useState(logintitle)
	const [logoEffect, setLogoEffect] = useState(logostyle)
	const [buttonEffect, setButtonEffect] = useState(buttonstyle)
	const { isLogin, setIsLogin } = mainstate()

	useEffect(() => {
		const timer1 = setTimeout(() => {
			setTitleEffect({
				...titleEffect,
				transform: 'translateY(0%)',
				transition: 'all 1s',
			})
		}, 1000)
		const timer2 = setTimeout(() => {
			setLogoEffect({
				...logoEffect,
				transform: 'scale(1) translateY(0%)',
				opacity: '1',
				transition: 'all 1s',
			})
			setButtonEffect({ ...buttonEffect, opacity: '1', transition: 'all 1s' })
		}, 2000)
		return () => {
			clearTimeout(timer1)
			clearTimeout(timer2)
		}
	}, [])

	return (
		<div style={mainstyle}>
			<div style={titleEffect}>
				{Cloud(20, 150)}
				<div style={{ zIndex: '2' }}>WITT</div>
			</div>
			<div style={logoEffect}>
				{Cloud(48, 250)}
				<img style={{ zIndex: '2' }} src={logo} />
			</div>
			<img
				style={buttonEffect}
				onClick={() => {
					setIsLogin(true)
				}}
				src={login}
			/>
		</div>
	)
}

export default Splash
