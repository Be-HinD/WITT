import { create } from 'zustand'

export interface IMainState {
	isLogin: boolean
	setIsLogin: (result: boolean) => void
}

export const mainstate = create<IMainState>((set) => ({
	isLogin: false,
	setIsLogin: (result: boolean) => set({ isLogin: result }),
}))
