import heart from '../assets/love.svg'
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'
// import styled from 'styled-components'

// const PlusEffect = styled.div`
// 	z-index: 1;
// 	position: absolute;
// 	width: 106px;
// 	height: 100px;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// 	border-radius: 10px;
// 	background-image: linear-gradient(-45deg, #e5d3eb55, #d4ced600, #e5d3eb55);
// 	opacity: 0.2;

// 	&:hover {
// 		background-image: linear-gradient(-45deg, #d4ced600, #e5d3eb55, #d4ced600);
// 		opacity: 1;
// 		filter: brightness(1.3);
// 		transition: opacity 0.5s ease;
// 		cursor: pointer;
// 	}
// `

const PlusEffectClass = `
absolute 
flex-column 
justify-center 
items-center 
rounded-[10px] 
z-[1] 
w-[6.625rem] h-[6.25rem] 
opacity-20 
bg-gradient-to-br from-[#d4ced600] via-[#e5d3eb55] to-[#d4ced600] 
hover:opacity-100 
hover:cursor-pointer 
hover:brightness-[1.3] 
hover:transtion-opacity 
transition ease-in-out duration-500
`

function ActionBar() {
	// const actionStyle = {
	// 	zIndex: '5',
	// 	width: '100%',
	// 	height: '100px',
	// 	display: 'flex',
	// 	justifyContent: 'space-between',
	// 	color: 'white',
	// } as React.CSSProperties

	// const tileStyle = {
	// 	width: '106px',
	// 	height: '100px',
	// 	borderRadius: '10px',
	// 	border: '1px #ffffff2e solid',
	// 	background: 'linear-gradient(-45deg, rgba(217, 217, 217, 0.16) 17%, rgba(217, 217, 217, 0.1) 85.5%)',
	// 	webkitBackdropFilter: 'blur(50px) brightness(100%)',
	// 	boxShadow: '0px 4px 34px #00000026',
	// 	display: 'flex',
	// 	flexDirection: 'column',
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// } as React.CSSProperties

	// const extraStyle = {
	// 	color: '#C0C0C0',
	// 	fontSize: '8px',
	// } as React.CSSProperties

	// const actionbuttonStyle = {
	// 	color: 'white',
	// 	fontSize: '12px',
	// 	fontWeight: '900',
	// } as React.CSSProperties

	const actionStyleClass = 'z-[5] w-full h-[6.25rem] flex justify-between text-[#ffffff]'

	const tileStyleClass =
		'w-[6.625rem] h-[6.25rem] rounded-[10px] border border-[#ffffff2e] bg-gradient-to-br from-[#D9D9D928] from-17% to-[#D9D9D919] to-85.5% shadow-[0_4px_34px_#00000026] backdrop-blur-[50px] backdrop-brightness-100'

	const extraStyleClass = 'text-[#C0C0C0] text-[8px]'

	const actionbuttonStyleClass = 'text-[#ffffff] text-xs font-black'

	return (
		// <div style={actionStyle}>
		<div className={actionStyleClass}>
			<div>
				{/* <div style={tileStyle}> */}
				<div
					style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
					className={tileStyleClass}
				>
					{/* <PlusEffect /> */}
					{/* <div style={extraStyle}>잔여 {2}개</div> */}
					{/* <img src={heart} /> */}
					{/* <div style={actionbuttonStyle}>애정 주기</div> */}

					<div className={PlusEffectClass}></div>
					<div className={extraStyleClass}>잔여 {2}개</div>
					<img src={heart} />
					<div className={actionbuttonStyleClass}>애정 주기</div>
				</div>
			</div>
			<div>
				{/* <div style={tileStyle}> */}
				<div
					style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
					className={tileStyleClass}
				>
					{/* <PlusEffect /> */}
					{/* <div style={extraStyle}>잔여 {5}개</div> */}
					{/* <img src={sun} /> */}
					{/* <div style={actionbuttonStyle}>햇살 쬐기</div> */}

					<div className={PlusEffectClass}></div>
					<div className={extraStyleClass}>잔여 {5}개</div>
					<img src={sun} />
					<div className={actionbuttonStyleClass}>햇살 쬐기</div>
				</div>
			</div>
			<div>
				{/* <div style={tileStyle}> */}
				<div
					style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
					className={tileStyleClass}
				>
					{/* <PlusEffect /> */}
					{/* <div style={extraStyle}>잔여 {0}개</div> */}
					{/* <img src={water} /> */}
					{/* <div style={actionbuttonStyle}>물 주기</div> */}

					<div className={PlusEffectClass}></div>
					<div className={extraStyleClass}>잔여 {0}개</div>
					<img src={water} />
					<div className={actionbuttonStyleClass}>물 주기</div>
				</div>
			</div>
		</div>
	)
}

export default ActionBar
