import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ProductDialogStore = {
    isOpen: boolean,
    setOpen: (open : boolean) => void,
}

export const useProductDialogStore = create<ProductDialogStore>()(persist((set) => (
    {
        isOpen: false,
        setOpen: (open) => set((state) => ({ ...state, isOpen: open })),
    }
),
    {
        name: 'product dialog store'
    }))
