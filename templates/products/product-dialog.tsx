'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import z, { fromJSONSchema } from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Field,
    FieldLabel,
    FieldError,
    FieldDescription
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Form } from "@/components/ui/form"
import { useProductDialogStore } from "./store"
import { Switch } from "@/components/ui/switch"
import { createProduct, updateProduct } from "./actions"
import { useEffect, useState } from "react"
import SelectBox, { item } from "@/components/select-box"
import { Spinner } from "@/components/ui/spinner"


const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    price: z.number().min(0),
    category: z.number(),
    status: z.boolean(),
    image: z
        .instanceof(FileList).nullable(),
})

export type ProductDialogProp = {
    categories: item[]
}
export default function ProductDialog({ categories }: ProductDialogProp) {
    const { isOpen, setOpen, product } = useProductDialogStore()
    const [loading, setLoading] = useState<boolean>(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: product?.name ?? "",
            image: null,
            description: product?.description ?? "",
            price: product?.price ?? 0,
            category: product?.category_id ?? 0,
            status: product?.status === "Active" ? true : false,
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const data = new FormData()
        data.append("name", values.name)
        values.image && data.append("image", values.image[0])
        data.append("description", values.description)
        data.append("price", values.price + "")
        data.append("category_id", values.category + "")
        data.append("status", values.status ? '1' : '0')
        setLoading(true)
        if (product?.id){
            await updateProduct(product?.id!, data)
        }else{
            await createProduct(data)
        }
        setLoading(false);
        setOpen(false)
        form.reset()
    }

    useEffect(() => {
        form.reset({
            name: product?.name ?? "",
            image: null,
            description: product?.description ?? "",
            price: product?.price ?? 0,
            category: product?.category_id ?? 0,
            status: product?.status === "Active" ? true : false,
        })
    }, [product])


    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{ product?.id ? "Update Product" : "Create new product"}</DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <Field>
                            <FieldLabel htmlFor="name">Name</FieldLabel>
                            <Input id="name" {...form.register("name")} />
                            <FieldError>{form.formState.errors.name?.message}</FieldError>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="description">Description</FieldLabel>
                            <Input id="description" {...form.register("description")} />
                            <FieldError>{form.formState.errors.description?.message}</FieldError>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="image">Product Image</FieldLabel>
                            <Input
                                id="image"
                                placeholder="upload image"
                                {...form.register("image")}
                                accept="image/png, image/jpeg, image/jpg"
                                type="file"
                            />
                            <FieldError>{form.formState.errors.image?.message}</FieldError>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="price">Price</FieldLabel>
                            <Input
                                id="price"
                                type="number"
                                step="0.01"
                                {...form.register("price", { valueAsNumber: true })}
                            />
                            <FieldError>{form.formState.errors.price?.message}</FieldError>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="category">Category</FieldLabel>
                            <Controller
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <SelectBox
                                        value={field.value?.toString()}
                                        onValueChange={(value: string) => field.onChange(Number(value))}
                                        placeholder="Select category"
                                        items={categories}
                                    />
                                )}
                            />
                            <FieldError>{form.formState.errors.category?.message}</FieldError>
                        </Field>

                        <Field className="flex items-center justify-between">
                            <FieldLabel>Status</FieldLabel>
                            <div className="w-[30]">
                                <Controller
                                    name="status"
                                    control={form.control}
                                    render={({ field }) => (
                                        <>
                                            <Switch
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            /> {field.value == true ? 'Active' : 'Inactive'}
                                        </>
                                    )}
                                />
                            </div>
                        </Field>

                        <Button type="submit" disabled={loading}>
                            { loading && <Spinner/> }Submit
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
