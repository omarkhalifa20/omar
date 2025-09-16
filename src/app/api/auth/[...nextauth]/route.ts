import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth, { NextAuthOptions } from "next-auth"
export const options:NextAuthOptions = {
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: 'Credentials',
          // The credentials is used to generate a suitable form on the sign in page.
          // You can specify whatever fields you are expecting to be submitted.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: { label: "email", type: "email" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
           
            const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
              method: 'POST',
              body: JSON.stringify({
               email:credentials?.email, 
               password:credentials?.password
            }),
              headers: { "Content-Type": "application/json" }
            })
            const user = await res.json()
      
            // If no error and we have user data, return it
            if (res.ok && user) {
              return user
            }
            // Return null if user data could not be retrieved
            return null
          }
        })
      ],
      session: {
        strategy: "jwt",
      },
      pages: {
        signIn: '/login',
       
      },
      callbacks: {
        async session({ session, token, user }) {
          return {...session,...token,...user}
        },
        async jwt({ token, user}) {
          return {...token,...user}
        }
      },
      secret: process.env.AUTH_SECRET,
}
const handler = NextAuth(options)

export { handler as GET, handler as POST }