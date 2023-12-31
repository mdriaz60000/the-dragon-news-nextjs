import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Shered/Navbar'
import Footer from '@/components/Shered/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

       <Navbar></Navbar>
           {children}
        <Footer></Footer>
        
        </body>
    </html>
  )
}
