import { create } from 'zustand'

export interface IMainState {
	isLogin: boolean
	setIsLogin: (result: boolean) => void
}

export interface IUserState {
	newNotice: string
	notices: JSON[]
	isNewNotice: boolean
	setNotices: (result: JSON[]) => void
	setNewNotice: (result: string) => void
	setIsNewNotice: () => void
}

export const mainstate = create<IMainState>()((set) => ({
	isLogin: false,
	setIsLogin: (result: boolean) => set({ isLogin: result }),
}))

export const userstate = create<IUserState>()((set) => ({
	newNotice: '',
	notices: [],
	isNewNotice: false,
	setNotices: (result: JSON[]) => result.map((value) => set((state) => ({ notices: [...state.notices, value] }))),
	setNewNotice: (result: string) => set({ newNotice: result }),
	setIsNewNotice: () => set((state) => ({ isNewNotice: state.newNotice !== '' })),
}))
