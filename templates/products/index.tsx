'use client'
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import ProductDialog from "./product-dialog";
import { item } from "@/components/select-box";
import { Button } from "@/components/ui/button";
import { useProductDialogStore } from "./store";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PaginationComponent } from "@/components/pagination";

type ProductsTemplateProp = {
    products: Product[]
    categories: Category[]
}
export default function ProductsTemplate({ products, categories }: ProductsTemplateProp) {
    const { setOpen, setProduct } = useProductDialogStore()
    const [search, setSearch] = useState<string>("")
    const router = useRouter()
    const searchParams = useSearchParams()
    const transformCategories = (categories: Category[]) => {
        return categories.map((cat) => {
            return { value: cat.id.toString(), text: cat.name } as item
        })
    }

    const openCreateDialog = () => {
        setProduct(null)
        setOpen(true)
    }


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const keyCode = e.keyCode;
        if (keyCode === 13) {
            e.preventDefault();
            const page = searchParams.get('page') ?? 1
            const limit= searchParams.get('limit') ?? 5
            router.push(`/products?search=${search}&page=${page}&limit=${limit}`)
            console.log("enter pressed.")
        };
    }

    return <div>
        <Input value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => handleKeyDown(e)} />
        <Button onClick={openCreateDialog}>Create</Button>
        <ProductDialog categories={transformCategories(categories)} />
        <DataTable columns={columns} data={products} />
        <PaginationComponent total={6} baseUrl="/products"/>
    </div>
}