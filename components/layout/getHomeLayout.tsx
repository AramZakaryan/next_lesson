import { ReactElement } from 'react'
import { Navbar } from '../navbar/Navbar'
import { Footer } from '../footer/Footer'

export function getHomeLayout(page: ReactElement) {
  return (
    <>
      <Navbar />
      <main className="flex-grow p-6 min-h-[calc(100vh-3.5rem)] bg-gray-100">
        {page}
      </main>
      <Footer className="bg-amber-300">
        <h6 className="text-sm font-semibold text-gray-700">Contacts</h6>
      </Footer>
    </>
  )
}
