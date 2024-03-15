import React from 'react'
import avatar from '../assets/avatar.gif'

function UserProfile({ gauge = 0.7 }: { gauge?: number }) {
	const profilestyle = {
		width: '100%',
		height: '70px',
		margin: '0px 14px',
		backgroundColor: '#342C3D',
		borderRadius: '15px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'white',
		fontWeight: '900',
	} as React.CSSProperties

	const userinfostyle = {
		width: '60%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		margin: '0px 10px',
		fontSize: '10px',
	} as React.CSSProperties

	const levelstyle = {
		width: '42px',
		height: '14px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: '8px',
		borderRadius: '5px',
		backgroundColor: '#6DBE70',
		color: 'white',
		fontSize: '8px',
	} as React.CSSProperties

	const totalgaugestyle = {
		position: 'absolute',
		marginTop: '3px',
		width: '160px',
		height: '12.5px',
		borderRadius: '5px',
		backgroundColor: '#92DAEB',
	} as React.CSSProperties

	const gaugestyle = {
		zIndex: '1',
		position: 'absolute',
		marginTop: '3px',
		width: `${160 * gauge}px`,
		height: '12.5px',
		borderRadius: '5px',
		backgroundColor: '#AEEB92',
	} as React.CSSProperties

	return (
		<div style={profilestyle}>
			<img width={48} src={avatar} />
			<div style={userinfostyle}>
				<div style={{ display: 'flex', flexDirection: 'row', margin: '5px 0px' }}>
					<span style={levelstyle}>Lv.{'나무'}</span>
					{'얼룩덜룩카피바라'}님
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						margin: '5px 0px',
					}}
				>
					<div>
						<span style={gaugestyle}></span>
						<span style={totalgaugestyle}></span>
					</div>
					<div style={{ fontSize: '12px', top: '-5px' }}>{gauge * 100}%</div>
				</div>
			</div>
			<div>설정</div>
		</div>
	)
}

export default UserProfile
