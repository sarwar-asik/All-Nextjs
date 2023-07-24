### PRIVATE ROUTES BY 2 lines >>>


#### create src>middleWare.js :::
    export { default } from "next-auth/middleware"

    export const config = { matcher: ["/profile",'addProductt'] }

### .env.local :::
    NEXTAUTH_SECRET=abcd1234
    NEXTAUTH_URL=http://localhost:3000

restart the project 

### redirect the project (add pages property >>>) >>>

      export const authOptions = {
        // Configure one or more authentication providers
        providers: [
            GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            }),
            GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
            })
            // ...add more providers here
        ],
        pages:{
            signIn:'/login'
        }
        }