import { data, userstate } from '../../../components/StateVariables'
import avatar from '../assets/avatar.gif'
import { ImSearch } from 'react-icons/im' // 유저 검색 아이콘

const UserProfile = (mydata: data) => {
	const profileStyleClass =
		'flex justify-center items-center z-[5] w-full h-[4.125rem] bg-[#342C3D] text-[#ffffff] font-black rounded-[15px]'

	const userinfoStyleClass = 'flex-column justify-center w-3/5 mx-[30px] my-0 text-[10px]'

	const levelStyleClass =
		'flex justify-center items-center mr-0.5 w-[2.625rem] h-3.5 rounded-[5px] text-[#ffffff] text-[8px] bg-[#6DBE70]'

	const totalgaugeStyleClass = 'absolute mt-[3px] rounded-[5px] bg-[#92DAEB]'

	const gaugeStyleClass = 'z-[1] absolute mt-[3px] rounded-[5px] bg-[#AEEB92]'

	const levels = userstate((state) => state.levels)

	return (
		<div className={profileStyleClass}>
			<img width={48} src={avatar} />
			<div className={userinfoStyleClass}>
				<div className="flex my-[5px] cursor-pointer">
					<span className={levelStyleClass}>{`${levels[~~(mydata.growthPoint / 10)]}`}</span>
					{`${mydata.userName}`}님<span className="mx-[15px] text-[8px]">{`${mydata.rank}`}위</span>
				</div>
				<div className="flex justify-between my-[5px]">
					<div>
						<span style={{ width: '44%', maxWidth: '320px', height: '12.5px' }} className={totalgaugeStyleClass}></span>
						<span
							style={{
								width: `${44 * (mydata.growthPoint / 10)}%`,
								maxWidth: `${320 * (mydata.growthPoint / 10)}px`,
								height: '12.5px',
							}}
							className={gaugeStyleClass}
						></span>
					</div>
					<div className="text-xs -top-[5px]">{(mydata.growthPoint / 10) * 100}%</div>
				</div>
			</div>
			<div
				className="cursor-pointer"
				onClick={() => {
					// 유저 검색 페이지 이동
				}}
			>
				{<ImSearch size={30} color="#ffffff" />}
			</div>
		</div>
	)
}

export default UserProfile
