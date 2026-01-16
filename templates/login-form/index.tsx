"use client"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import {
    z
} from "zod"
import { 
    Form } from '@/components/ui/form'
import {
    Field,
    FieldLabel,
    FieldError
} from "@/components/ui/field"
import {
    Button
} from "@/components/ui/button"
import {
    Input
} from "@/components/ui/input"

const formSchema = z.object({
    username: z.string().min(1, "Please enter username."),
    password: z.string().min(1, "please enter password.")
});

export default function LoginForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
       console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
                <Field>
                    <FieldLabel htmlFor="username">Username</FieldLabel>
                    <Input
                        id="username"
                        placeholder="Enter username"

                        {...form.register("username")}
                    />

                    <FieldError>{form.formState.errors.username?.message}</FieldError>
                </Field>
                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                        id="password"
                        placeholder="Enter password"
                        type="password"
                        {...form.register("password")}
                    />

                    <FieldError>{form.formState.errors.password?.message}</FieldError>
                </Field>
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}