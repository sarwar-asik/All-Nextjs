### Layout system in Nextjs Router

#### src>app>layout.js (by-default):::

    import "./globals.css";
    export const metadata = {
    title: " Next App Router ",
    description: "Generated by  next app Router",
    };

    export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            // className={inter.className}
            className="w-[100%] mx-auto text-center"
        >

            <div className="min-h-screen text-xl">
            {children}
            </div>

        </body>
        </html>
    );
    }

#### src>app>page.js (cut the route to src>(with-layout)>page.js)

Home age for RootLayout with Navar and Footer

## Create main layout

##### src>app>(with-layout)>layout.js [for main layout]::::

        import Navbar from "@/components/shared/Navbar";

        import Footer from "@/components/shared/Footer";

        export default function RootLayout({ children }) {
        return (
        <>
            <Navbar></Navbar>
                <div className="min-h-screen text-xl">
                {children}
                </div>
                <Footer/>
        </>
        );
        }

you have create the children folder those will under the RootLayout with Navbar and Footer

##### src>app>(with-layout)>page.js

        "use client"

        const HomePage = () => {
        console.log("Check Server ")

        return (
            <div>
            <h1 className="text-center text-4xl ">This is Home pagess</h1>

            </div>
        );
        };

        export default HomePage;

### src>app>(with-layout)>blog>page.js

### src>app>(with-layout)>news>page.js

###### ** src>app>(with-layout)>news>[id]>page.js (for news details):::  
    "use client"

    const NewsDetails = ({ params,searchParams}) => {
        console.log(params,"and",searchParams);
        return (
            <div>
             <h3>News dynamic detail pages ::: {params.id} </h3>
            </div>
        )
    };

    export default NewsDetails;


### src>app>(with-layout)>product>page.js

### src>app>(with-layout)>cart>page.js

### src>app>(with-layout)>signup>page.js

### src>app>(with-layout)>login>page.js

### src>app>(with-layout)>profile>page.js

### src>app>(with-layout)>review>page.js