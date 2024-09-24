import { NextPageWithLayout } from '@/pages/_app'
import { getHomeLayout } from 'components/layout/getHomeLayout'
import Head from 'next/head'
import { LoginNavigate } from '../../../hoc/LoginNavigate'

const Private: NextPageWithLayout = () => {
  return <>
    <LoginNavigate>
      <div>
        <Head><title>Private Page</title></Head>
        <p>This is private!</p>
      </div>
    </LoginNavigate>
  </>
}

Private.getLayout = getHomeLayout

export default Private