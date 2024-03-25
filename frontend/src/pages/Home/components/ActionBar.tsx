import heart from '../assets/love.svg'
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

const PlusEffectClass = `
absolute 
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

const actionStyleClass = 'z-[5] w-full h-[6.25rem] flex justify-around text-[#ffffff]'

const tileStyleClass = `
w-[6.625rem] h-[6.25rem] 
rounded-[10px] 
border border-[#ffffff2e] 
bg-gradient-to-br from-[#D9D9D928] from-17% to-[#D9D9D919] to-85.5% 
shadow-[0_4px_34px_#00000026] 
backdrop-blur-[50px] 
backdrop-brightness-100 
`

const extraStyleClass = 'text-[#C0C0C0] text-[8px]'

const actionbuttonStyleClass = 'text-[#ffffff] text-xs font-black'

const ActionBar = () => {
	return (
		<div className={actionStyleClass}>
			<div>
				<div
					style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
					className={tileStyleClass}
				>
					<div className={PlusEffectClass}></div>
					<div className={extraStyleClass}>잔여 {2}개</div>
					<img src={heart} />
					<div className={actionbuttonStyleClass}>애정 주기</div>
				</div>
			</div>
			<div>
				<div
					style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
					className={tileStyleClass}
				>
					<div className={PlusEffectClass}></div>
					<div className={extraStyleClass}>잔여 {5}개</div>
					<img src={sun} />
					<div className={actionbuttonStyleClass}>햇살 쬐기</div>
				</div>
			</div>
			<div>
				<div
					style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
					className={tileStyleClass}
				>
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
