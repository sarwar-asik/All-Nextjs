import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

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
