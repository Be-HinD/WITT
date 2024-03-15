import React from 'react'
import heart from '../assets/love.svg'
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function ActionBar() {
	const actionstyle = {
		width: '100%',
		height: '100px',
		display: 'flex',
		justifyContent: 'space-between',
		color: 'white',
	} as React.CSSProperties

	const tilestyle = {
		width: '106px',
		height: '100px',
		borderRadius: '10px',
		border: '1px #ffffff2e solid',
		background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.16) 17%, rgba(217, 217, 217, 0.1) 85.5%)',
		webkitBackdropFilter: 'blur(50px) brightness(100%)',
		boxShadow: '0px 4px 34px #00000026',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	} as React.CSSProperties

	const extrastyle = {
		color: '#C0C0C0',
		fontSize: '8px',
	} as React.CSSProperties

	const actionbuttonstyle = {
		color: 'white',
		fontSize: '12px',
		fontWeight: '900',
	} as React.CSSProperties

	return (
		<div style={actionstyle}>
			<div style={tilestyle}>
				<div style={extrastyle}>잔여 {2}개</div>
				<img src={heart} />
				<div style={actionbuttonstyle}>애정 주기</div>
			</div>
			<div style={tilestyle}>
				<div style={extrastyle}>잔여 {5}개</div>
				<img src={sun} />
				<div style={actionbuttonstyle}>햇살 쬐기</div>
			</div>
			<div style={tilestyle}>
				<div style={extrastyle}>잔여 {0}개</div>
				<img src={water} />
				<div style={actionbuttonstyle}>물 주기</div>
			</div>
		</div>
	)
}

export default ActionBar
