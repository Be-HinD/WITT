import { useEffect, useLayoutEffect, useState } from 'react'
import Header from '../../components/Header'
import { IMenu, IMenuFunc } from '../../components/interfaces'
import { icons } from '../../constants/header-icons'
import { useRouter } from '../../hooks/useRouter'
import SearchBar from './components/search/SearchBar'
import RecentSearch from './components/recent/RecentSearch'
import SearchResult from './components/search/SearchResult'
import { ISearchKeyword, ISearchUser, RecentItemType } from './search-types'

/*
  해야할 것들
  (+) 1. x 누르면 로컬스토리지에서 검색 기록 삭제
  (+) 2. SearchBar 상단 고정
  (-) 3. RecentSearch에 User Type 검색 결과도 prop 전달
  (-) 4. 같은 방식으로 User Type에 대한 검색 기록 local Storage에서 관리
	(-) 5. 유저 검색 결과 스켈레톤 컴포넌트 작성

	최근 검색 결과 - 유저 버전
	검색 결과에서 SearchItem을 클릭하면 로컬스토리지 USER 에 add
	이미 있으면 순서만 최근으로 업데이트하기
*/

const Search = () => {
	// header
	const { goBack } = useRouter()
	const menu: IMenu = { left: icons.BACK, center: '검색', right: undefined }
	const func: IMenuFunc = { left_func: () => goBack(), right_func: undefined }

	// state
	const [, setIsFocused] = useState(false)
	const [input, setInput] = useState('')
	const [recentKeywords, setRecentKeywords] = useState<ISearchKeyword[]>([])
	const [recentUsers, setRecentUsers] = useState<ISearchUser[]>([])

	// 페이지가 로드될 때 로컬 스토리지에서 최근 검색 내용을 가져옴
	useLayoutEffect(() => {
		const keywords = localStorage.getItem(RecentItemType.KEYWORD)
		if (keywords) {
			setRecentKeywords(JSON.parse(keywords))
		}

		const users = localStorage.getItem(RecentItemType.USER)
		if (users) {
			setRecentUsers([...JSON.parse(users), ...recentUsers])
		}
	}, [])

	// 최근 검색 이력 state가 변할 때마다 로컬 스토리지에 업데이트
	useEffect(() => {
		if (recentKeywords.length) localStorage.setItem(RecentItemType.KEYWORD, JSON.stringify(recentKeywords))
		if (recentUsers.length) localStorage.setItem(RecentItemType.USER, JSON.stringify(recentUsers))
	}, [recentKeywords, recentUsers])

	// 검색어를 input에 담는 함수
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setInput(e.target.value)
	}

	// 엔터를 눌렀을 때 검색한 내용을 로컬스토리지 업데이트하는 함수
	const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.nativeEvent.isComposing) return
		if (event.key === 'Enter' && input.trim() !== '') {
			setRecentKeywords([{ id: Date.now(), text: input }, ...recentKeywords])
		}
	}

	const handleUpdateUsers = (userInfo: ISearchUser) => {
		// 검색한 사용자는 userId를 로컬 스토리지에 담아두기
		// userId로 사용자 정보 요청하는 api가 없을 경우..를 대비해 일단 몽땅 넣어두자.
		alert(userInfo)
		setRecentUsers([
			{
				id: userInfo.id,
				profileImg: userInfo.profileImg,
				userName: userInfo.userName,
				level: userInfo.level,
			},
			...recentUsers,
		])
		// localStorage.setItem(RecentItemType.USER, JSON.stringify([...recentUsers, userInfo]))
	}

	const handleDelete = (type: RecentItemType, id: number) => {
		switch (type) {
			case RecentItemType.KEYWORD:
				setRecentKeywords(recentKeywords.filter((keyword) => keyword.id !== id))
				return
			case RecentItemType.USER:
				setRecentUsers(recentUsers.filter((user) => user.id !== id))
				return
		}
	}

	/*
      검색창에
      포커스 되면 -> 검색 결과 리스트 보여주기 <SearchResult />
      포커스 벗어나면 -> 최근 검색 리스트 보여주기 <RecentSearch /> (최근 검색 타입: USER, KEYWORD)
  */
	return (
		<div className="text-whiteText bg-background">
			<Header menu={menu} func={func} />
			<section className="flex flex-col gap-2 mt-14 px-4">
				<div className="flex fl"></div>
				<SearchBar
					input={input}
					setInput={setInput}
					setIsFocused={setIsFocused}
					handleInput={handleInput}
					handleEnter={handleEnter}
				/>
				<fieldset>
					{input ? (
						<SearchResult userUpdate={handleUpdateUsers} />
					) : (
						<RecentSearch
							setInput={setInput}
							userUpdate={handleUpdateUsers}
							recentKeywords={recentKeywords}
							recentUsers={recentUsers}
							handleDelete={handleDelete}
						/>
					)}
				</fieldset>
			</section>
		</div>
	)
}

export default Search
