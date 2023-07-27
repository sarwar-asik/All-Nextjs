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
