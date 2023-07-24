### Impleament Nextjs Authentication >>>

### install :::
    npm install next-auth


## Google Auth

#### create a src>pages>api>auth>[...nextAuth].js 
    import NextAuth from "next-auth"
    import GithubProvider from "next-auth/providers/github"
    import GoogleProvider from "next-auth/providers/google";

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
        }

    export default NextAuth(authOptions)

### get Google  secrete  and id from :

    https://console.cloud.google.com/apis/credentials 
    ** 1 ** create project 
    ** 2 ** click OAuth consent screen (left slider) >
         select 🧧 external>>
          fillup >>>:
            AppName ,userSupportEmail ,Application home page,Email address
         save 
     **3 **  click Credential (left slider)>
           click +CREATE CREDENTIALS>>
             OAuth Client ID >>>
               select : Web Application
               Authorized JavaScript origin : http://localhost:3000
               Authorized redirect URIs(**!!must**) :  http://localhost:3000/'api/auth/callback/google
            Click Create
               
       will open a modal . copy the clientID and Secret      
            

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
            'google',
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