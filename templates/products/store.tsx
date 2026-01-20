import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Store = {
    count: number,
    increaseCount: () => void,
}

export const useProductStore = create<Store>()(persist((set) => (
    {
        count: 0,
        increaseCount: () => set((state) => ({ ...state, count: state.count + 1 })),
    }
),
    {
        name: 'product store'
    }))
