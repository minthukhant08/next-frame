import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ProductDialogStore = {
    product?:Product | null,
    setProduct: (product: Product | null) => void, 
    isOpen: boolean,
    setOpen: (open : boolean) => void,
}

export const useProductDialogStore = create<ProductDialogStore>()(persist((set) => (
    {
        product: undefined,
        setProduct: (product) => set((state) => ({ ...state, product: product })),
        isOpen: false,
        setOpen: (open) => set((state) => ({ ...state, isOpen: open })),
    }
),
    {
        name: 'product dialog store'
    }))
