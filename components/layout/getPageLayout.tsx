import { ReactElement } from 'react'
import { Navbar } from '../navbar/Navbar'
import { Footer } from '../footer/Footer'
import Link from 'next/link'

export function getPageLayout(page: ReactElement) {
  return (
    <>
      <Navbar />
      <main className="flex-grow p-6 min-h-[calc(100vh-3.5rem)] bg-gray-100">
        {page}
      </main>
      <Footer>
        <h6 className="text-sm font-semibold text-gray-700">Contacts</h6>
        <Link href="/" className="text-blue-600 hover:underline">
          go to main
        </Link>
      </Footer>
    </>
  )
}
