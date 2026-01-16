import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    DiscordProvider({
        clientId: "1358635915236474882",
        clientSecret: "Df541binc1At3iWxE6D7jPoS3LrkpLVB"
    }),
    GoogleProvider({
      clientId: "",
      clientSecret: ""
    })
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }