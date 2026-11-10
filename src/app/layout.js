import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import Topbar from '../../components/Topbar'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
export const metadata = {
  title: 'Afghanistan Dry Fruits',
  description: 'The House of Dry Fruits',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Topbar />
      <Navbar></Navbar>
      {children}
      

      <Footer/> 
      {/* <DesktopNavbar/>
      <Footer/>  */}
      </body>
    </html>
  )
}