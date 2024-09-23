import { NextPageWithLayout } from '@/pages/_app'
import { getHomeLayout } from 'components/layout/getHomeLayout'
import Head from 'next/head'

const Home: NextPageWithLayout = () => {
  return <>
    <Head><title>Main Page</title></Head>
    <p>Hello!</p>
  </>
}

Home.getLayout = getHomeLayout

export default Home