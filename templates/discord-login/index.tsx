'use client'
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function DiscordLogin() {
    return <>
        <Button onClick={ () => signIn('discord')}>Login with Discord</Button>
        <Button onClick={ () => signIn('google')}>Login with Google</Button>
    </>
}