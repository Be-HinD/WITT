import { create } from 'zustand'

export interface IMainState {
	isLogin: boolean
	token: string
	setToken: (result: string) => void
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
	isLogin: true,
	token:
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcmFpc2luZ2R1c3Qvb2lqYWZkLmNvbSIsImlhdCI6MTcxMTYxMzg1NCwiZXhwIjoxNzEyODIzNDU0LCJzdWIiOiIxMSIsImlkIjoxMX0.ej3iNoru8MPtwQA80EHYlBs6v6Y5ShIrvluVdylbOzA',
	setToken: (result: string) => set({ token: result }),
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
