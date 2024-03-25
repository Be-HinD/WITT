import avatar from '../assets/avatar.gif'
import { TbBellFilled } from 'react-icons/tb' // 새 알림 없음
import { BiSolidBellRing } from 'react-icons/bi' // 새 알림 있음
import { userstate } from '../../../components/StateVariables'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const UserProfile = ({ gauge = 0.7 }: { gauge?: number }) => {
	const navigate = useNavigate()

	const profileStyleClass =
		'flex justify-center items-center z-[5] w-full h-[4.125rem] bg-[#342C3D] text-[#ffffff] font-black rounded-[15px]'

	const userinfoStyleClass = 'flex-column justify-center w-3/5 mx-[10px] my-0 text-[10px]'

	const levelStyleClass =
		'flex justify-center items-center mr-0.5 w-[2.625rem] h-3.5 rounded-[5px] text-[#ffffff] text-[8px] bg-[#6DBE70]'

	const totalgaugeStyleClass = 'absolute mt-[3px] rounded-[5px] bg-[#92DAEB]'

	const gaugeStyleClass = 'z-[1] absolute mt-[3px] rounded-[5px] bg-[#AEEB92]'

	const { isNewNotice, setIsNewNotice } = userstate()

	useEffect(() => {
		setIsNewNotice()
	}, [])

	return (
		<div className={profileStyleClass}>
			<img width={48} src={avatar} />
			<div className={userinfoStyleClass}>
				<div className="flex my-[5px] cursor-pointer">
					<span className={levelStyleClass}>Lv.{'나무'}</span>
					{'얼룩덜룩카피바라'}님
				</div>
				<div className="flex justify-between my-[5px]">
					<div>
						<span style={{ width: '160px', height: '12.5px' }} className={totalgaugeStyleClass}></span>
						<span style={{ width: `${160 * gauge}px`, height: '12.5px' }} className={gaugeStyleClass}></span>
					</div>
					<div className="text-xs -top-[5px]">{gauge * 100}%</div>
				</div>
			</div>
			<div
				className="cursor-pointer"
				onClick={() => {
					navigate('/follow')
				}}
			>
				{isNewNotice ? <BiSolidBellRing size={30} color={'#fccf03'} /> : <TbBellFilled size={30} />}
			</div>
		</div>
	)
}

export default UserProfile
