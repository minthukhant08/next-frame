'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Field,
    FieldLabel,
    FieldError
} from "@/components/ui/field"
import {
    Input
} from "@/components/ui/input"
import { Form } from "@/components/ui/form"
import { useState } from "react"
import { createCategory } from "./actions"
export default function CategoryDialog( { onCreate } : { onCreate : (category : Omit<Category, 'id'>) => void} ) {
    const [ open, setOpen] = useState<boolean>(false)
    const formSchema = z.object({
        name: z.string().min(1),
        image: z.string().min(1)
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),

    })

    const onSubmit = async (values: z.infer < typeof formSchema > ) => {
        onCreate({ 
            image: values.image,
            name: values.name
        })
        setOpen(false)
        form.reset()
    }

    return (<Dialog open={open} onOpenChange={ () => setOpen((prev) => !prev)}>
        <DialogTrigger><Button>Create</Button></DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create new category</DialogTitle>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
                        <Field>
                            <FieldLabel htmlFor="name">name</FieldLabel>
                            <Input
                                id="name"
                                placeholder="Enter category name"

                                {...form.register("name")}
                            />

                            <FieldError>{form.formState.errors.name?.message}</FieldError>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="image">image</FieldLabel>
                            <Input
                                id="image"
                                placeholder="Enter image url"

                                {...form.register("image")}
                            />

                            <FieldError>{form.formState.errors.image?.message}</FieldError>
                        </Field>
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </DialogHeader>
        </DialogContent>
    </Dialog>)
}