import { useNavigate } from 'react-router-dom'
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
hover:scale-110
`

// const extraStyleClass = 'text-[#C0C0C0] text-[8px]'

const actionbuttonStyleClass = 'text-[#ffffff] text-xs font-black'

const ActionBar = () => {
	const navigate = useNavigate()

	return (
		<div className={actionStyleClass}>
			<div>
				<div
					style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
					className={tileStyleClass}
					onClick={() => {
						navigate('quiz')
					}}
				>
					<div className={PlusEffectClass}></div>
					<img src={heart} />
					<div className={actionbuttonStyleClass}>퀴즈 풀러 가기</div>
				</div>
			</div>
			<div>
				<div
					style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
					className={tileStyleClass}
				>
					<div className={PlusEffectClass}></div>
					<img src={water} />
					<div className={actionbuttonStyleClass}>물 주기{`(${4})`}</div>
				</div>
			</div>
			<div>
				<div
					style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
					className={tileStyleClass}
					onClick={() => {
						navigate('follow')
					}}
				>
					<div className={PlusEffectClass}></div>
					<img src={sun} />
					<div className={actionbuttonStyleClass}>이웃 조회하기</div>
				</div>
			</div>
		</div>
	)
}

export default ActionBar
