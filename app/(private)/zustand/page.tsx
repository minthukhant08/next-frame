'use client'
import { useProductStore } from "@/templates/products/store"

export default function zustand() {
    const { count } = useProductStore();
    return <div>{count}</div>
}