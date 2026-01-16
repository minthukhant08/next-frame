'use client'
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function DiscordLogin() {
    return <>
        <Button onClick={ () => signIn()}>Sign in</Button>
    </>
}