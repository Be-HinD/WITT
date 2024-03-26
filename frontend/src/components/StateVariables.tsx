import { create } from 'zustand'

export interface IMainState {
	isLogin: boolean
	setIsLogin: (result: boolean) => void
}

export interface IUserState {
	newNotice: number
	notices: JSON[]
	isNewNotice: boolean
	setNewNotice: (result: number) => void
	setIsNewNotice: () => void
}

export const mainstate = create<IMainState>()((set) => ({
	isLogin: false,
	setIsLogin: (result: boolean) => set({ isLogin: result }),
}))

export const userstate = create<IUserState>()((set) => ({
	newNotice: 0,
	notices: [],
	isNewNotice: false,
	setNewNotice: (result: number) => set({ newNotice: result }),
	setIsNewNotice: () => set((state) => ({ isNewNotice: state.newNotice === 0 ? false : true })),
}))
