import { Footer, Navbar } from '@/components'
import './globals.css'
import localFont from '@next/font/local'
import NavbarMobile from '@/components/NavbarMobile/NavbarMobile'

const myFont = localFont({
  src: "../../public/fonts/L0x-DF02iFML4hGCyMqlbS1miXK2.woff2",
  display: "swap"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={myFont.className}>
      <head />
      <body >
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className='block lg:hidden'>
           <NavbarMobile />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
