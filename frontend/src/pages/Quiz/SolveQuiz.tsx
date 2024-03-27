import { FaRegCircle } from 'react-icons/fa6'
import { TbX } from 'react-icons/tb'
import Header from '../../components/Header'
import { IMenu, IMenuFunc } from '../../components/interfaces'
import { icons } from '../../constants/header-icons'
import { useNavigate } from 'react-router-dom'

const SolveQuizPage = () => {
	const navigate = useNavigate()
	const menu: IMenu = { left: icons.BACK, center: '퀴즈', right: undefined }
	const func: IMenuFunc = { left_func: () => navigate('/'), right_func: undefined }
	return (
		<div className="pt-20">
			<Header menu={menu} func={func}></Header>

			<div className="w-40 h-40">내가 찍은 사진</div>
			<div className="">
				<div className="text-white text-lg">이 물건은 {'일반쓰레기로 배출'}해요</div>
				<div className="flex">
					<div className="bg-gradient-to-tr from-red-800/30 to-red-400/30 w-32 h-32 flex justify-center items-center border-2 rounded-md border-red-800/30 mr-3">
						<TbX className="w-20 h-20 text-red-500" />
					</div>
					<div className="bg-gradient-to-tr from-blue-800/30 to-blue-400/30 w-32 h-32 flex justify-center items-center border-2 rounded-md border-blue-800/30">
						<FaRegCircle className="w-[56px] h-[56px] text-blue-500" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SolveQuizPage
