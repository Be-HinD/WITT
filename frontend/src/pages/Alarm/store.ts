import { create } from 'zustand'

interface ISSEStore {
	lastEventId: number
	setLastEventId: (newLastEventId: number) => void
}

export const useSSEStore = create<ISSEStore>((set) => ({
	lastEventId: 0,
	setLastEventId: (newLastEventId) => set({ lastEventId: newLastEventId }),
}))
