## Create layout in NextJS 

### Create a Root Layout >>>

####  src>pages>_app.js >>>

    export default function MyApp({ Component, pageProps }) {
        const getLayout = Component.getLayout || ((page) => page);
        return getLayout(<Component {...pageProps} />);
    }
    here need to create get layout 

#### src>components>Layout> RootLayout.js (create the layout where is the outlet ) >>>>


   

        const RootLayout = ({children}) => {
        return (
            <div>
                <Navbar/>
                     {children}
                <Footer>
            </div>
        );
        };

        export default RootLayout;


#### src>pages>index.js Now wrafe the home page  ::::
   

        import RootLayout from "../../components/layouts/RootLayout";

        const HomePages = () => {
        return (
            <div>
                <Head></Head>
                <h2>This is Next Home pages </h2>
            </div>
        );
        };
            
        export default HomePages;

        HomePages.getLayout = function getLayout(page) {
            return <RootLayout>{page}</RootLayout>;
        };



## nested(dashboard) layout Create >>>>

#### src>components>layout>DashboardLayout.js(Create the layout) ::  

     

            const DashBoardLayout.js = ({children}) => {
            return (
                <div>
                  <dashboardHeader />
                  {children}
                
                </div>
            );
            };

            export default DashBoardLayout.js;


#### src>pages>AdminPage.js 

        AdminPage.getLayout = function getLayout(page){
            return (
            <RootLayout>
                <DashBoardLayout>
                    {page}
                </DashBoardLayout>
            </RootLayout>
            )
        }
#### src> pages>dashboard>dashboard.js >>>
        dashboard.getLayout = function getLayout(page){
        return (
            <DashBoardLayout>
                {page}
            </DashBoardLayout>
        )
    }