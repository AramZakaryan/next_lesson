import { Navbar } from '../navbar/Navbar'
import { PropsWithChildren } from 'react'
import { NextPage } from 'next'
import { Footer } from '../footer/Footer'

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout