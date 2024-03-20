import React from 'react'
import avatar from '../assets/avatar.gif'

function UserProfile({ gauge = 0.7 }: { gauge?: number }) {
	// const profileStyle = {
	// 	zIndex: '5',
	// 	width: '100%',
	// 	height: '70px',
	// 	margin: '0px 14px',
	// 	backgroundColor: '#342C3D',
	// 	borderRadius: '15px',
	// 	display: 'flex',
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// 	color: 'white',
	// 	fontWeight: '900',
	// } as React.CSSProperties

	// const userinfoStyle = {
	// 	width: '60%',
	// 	display: 'flex',
	// 	flexDirection: 'column',
	// 	justifyContent: 'center',
	// 	margin: '0px 10px',
	// 	fontSize: '10px',
	// } as React.CSSProperties

	// const levelStyle = {
	// 	width: '42px',
	// 	height: '14px',
	// 	display: 'flex',
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// 	marginRight: '8px',
	// 	borderRadius: '5px',
	// 	backgroundColor: '#6DBE70',
	// 	color: 'white',
	// 	fontSize: '8px',
	// } as React.CSSProperties

	// const totalgaugeStyle = {
	// 	position: 'absolute',
	// 	marginTop: '3px',
	// 	width: '160px',
	// 	height: '12.5px',
	// 	borderRadius: '5px',
	// 	backgroundColor: '#92DAEB',
	// } as React.CSSProperties

	// const gaugeStyle = {
	// 	zIndex: '1',
	// 	position: 'absolute',
	// 	marginTop: '3px',
	// 	width: `${160 * gauge}px`,
	// 	height: '12.5px',
	// 	borderRadius: '5px',
	// 	backgroundColor: '#AEEB92',
	// } as React.CSSProperties

	const profileStyleClass =
		'flex justify-center items-center z-[5] w-full h-[4.125rem] bg-[#342C3D] text-[#ffffff] font-black rounded-[15px]'

	const userinfoStyleClass = 'flex-column justify-center w-3/5 mx-[10px] my-0 text-[10px]'

	const levelStyleClass =
		'flex justify-center items-center mr-0.5 w-[2.625rem] h-3.5 rounded-[5px] text-[#ffffff] text-[8px] bg-[#6DBE70]'

	const totalgaugeStyleClass = 'absolute mt-[3px] rounded-[5px] bg-[#92DAEB]'

	const gaugeStyleClass = 'z-[1] absolute mt-[3px] rounded-[5px] bg-[#AEEB92]'

	return (
		// <div style={profileStyle}>
		<div className={profileStyleClass}>
			<img width={48} src={avatar} />
			{/* <div style={userinfoStyle}> */}
			<div className={userinfoStyleClass}>
				{/* <div style={{ display: 'flex', flexDirection: 'row', margin: '5px 0px', cursor: 'pointer' }}> */}
				<div className="flex my-[5px] cursor-pointer">
					{/* <span style={levelStyle}>Lv.{'나무'}</span> */}
					<span className={levelStyleClass}>Lv.{'나무'}</span>
					{'얼룩덜룩카피바라'}님
				</div>
				{/* <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0px', }}> */}
				<div className="flex justify-between my-[5px]">
					<div>
						{/* <span style={gaugeStyle}></span> */}
						{/* <span style={totalgaugeStyle}></span> */}
						<span style={{ width: '160px', height: '12.5px' }} className={totalgaugeStyleClass}></span>
						<span style={{ width: `${160 * gauge}px`, height: '12.5px' }} className={gaugeStyleClass}></span>
					</div>
					{/* <div style={{ fontSize: '12px', top: '-5px' }}>{gauge * 100}%</div> */}
					<div className="text-xs -top-[5px]">{gauge * 100}%</div>
				</div>
			</div>
			{/* <div style={{ cursor: 'pointer' }}>설정</div> */}
			<div className="cursor-pointer">설정</div>
		</div>
	)
}

export default UserProfile
