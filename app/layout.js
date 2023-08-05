import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oxino VPN',
  description: 'Oxino VPN',
}


import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={inter.className}>
        <Navbar />
        <div className='flex w-full justify-center'>
          <div className='w-[90%] sm:w-full'>
            {children}
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  )
}
