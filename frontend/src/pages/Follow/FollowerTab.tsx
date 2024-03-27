import FollowUser from './components/FollowUser'

export const dummy = new Array(15).fill({})
const FollowerTab = () => {
	return (
		<div className="pt-12 px-5">
			{/* TODO: 실제 데이터 넣기, key값 설정 */}
			{dummy.map(() => (
				<FollowUser />
			))}
		</div>
	)
}

export default FollowerTab
