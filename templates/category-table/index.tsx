"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { createCategory, deleteCategory, getAllCategories } from '@/templates/category-table/actions'
import { DataTable } from "@/components/data-table"
import { useEffect, useState } from "react"
import CategoryDialog from "./create-dialog"


export default function Categories() {

    const columns: ColumnDef<Category>[] = [
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "image",
            header: "Image",
            cell: ({ row }) => {
                return <Image src={row.original.image} alt="img" width={50} height={50} unoptimized />
            }
        },

        {
            accessorKey: "action",
            header: "Actions",
            cell: ({ row }) => {
                return <Button onClick={() => {
                    deleteCategory(row.original.id).then(() => getCategories())
                }} >Delete</Button>
            }
        },
    ]

    const [categories, setCategories] = useState<Category[]>([])

    const getCategories = async () => {
        try {
            const categories = await getAllCategories()
            setCategories(categories)
        } catch (error) {
            console.log(error)
            setCategories([])
        }
    }

    const storeCategory = async (category: Omit<Category, 'id'>) => {
        await createCategory({ 
            image: category.image,
            name: category.name
        }).then(()=> getCategories())
    }

    useEffect(() => {
        getCategories()
    }, [])

    return <div>
        
        <div className="p-10">
            <div className="pb-4"> <CategoryDialog onCreate={storeCategory} /> </div>
            <DataTable columns={columns} data={categories} />
        </div>
    </div>
}