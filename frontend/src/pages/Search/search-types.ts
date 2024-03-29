export const enum RecentItemType {
	USER = 'USER',
	KEYWORD = 'KEYWORD',
}

export interface ISearchKeyword {
	id: number
	text: string
}

export interface ISearchUser {
	id: number,
	profileImg: string,
	userName: string,
	level: string
}

export interface UserInfoProp {
	userInfo: ISearchUser
}

export interface SearchItemProp {
	setInput?: React.Dispatch<React.SetStateAction<string>>
	type: RecentItemType
	userUpdate?: (userInfo: ISearchUser) => void
	keyword?: ISearchKeyword
	profileImg?: string
	userInfo?: ISearchUser
}

export interface RecentSearchProp {
	setInput: React.Dispatch<React.SetStateAction<string>>
	userUpdate: (userInfo: ISearchUser) => void
	recentKeywords: ISearchKeyword[]
	recentUsers: ISearchUser[]
	handleDelete: (type: RecentItemType, id: number) => void
}

export interface searchProp {
	input: string | undefined
	setInput: React.Dispatch<React.SetStateAction<string>>
	setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
	handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
	handleEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface SearchResultProp {
	userUpdate: (userInfo: ISearchUser) => void
}