### Impleament Nextjs Authentication >>>

### install :::
    npm install next-auth


## Github Auth

#### create a src>pages>api>auth>[...nextAuth].js 
      import NextAuth from "next-auth"
        import GithubProvider from "next-auth/providers/github"

        export const authOptions = {
        // Configure one or more authentication providers
        providers: [
            GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            }),
            // ...add more providers here
        ],
        }

        export default NextAuth(authOptions)

### get Github  secrete  and id from :
    https://github.com/settings/applications/new  


### src>pages>_app ::::


        import { SessionProvider } from "next-auth/react"

        export default function App({ Component, pageProps }) {
        return (
        <SessionProvider session={pageProps.session}>
            <>
            <Navbar />
            <Component {...pageProps} />
            </>
        </SessionProvider>
        );
        }



### src>pages>login.js ::::

        <button onClick={()=>signIn(
            'github',
            {
              callbackUrl:"http://localhost:3000/"
            }
            )} >
        Login
        </button>
### src>pages>Navbar (for get user ):::
    import { useSession, signIn, signOut } from "next-auth/react"
    export default function Component() {
    const { data: session } = useSession()
    if (session) {
        return (
        <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>
        )
    }
    return (
        <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
        </>
    )
    }