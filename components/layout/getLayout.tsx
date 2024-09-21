import Layout from './Layout'
import { ReactElement } from 'react'

export function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}