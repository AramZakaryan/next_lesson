import { NextPageWithLayout } from '@/pages/_app'
import { getHomeLayout } from 'components/layout/getHomeLayout'
import Head from 'next/head'
import { LoginNavigate } from '../../../hoc/LoginNavigate'

const PrivateByHoc: NextPageWithLayout = () => {
  return <>
    <LoginNavigate>
      <div>
        <Head><title>PrivateByHoc Page</title></Head>
        <p>This is private by hoc page!</p>
      </div>
    </LoginNavigate>
  </>
}

PrivateByHoc.getLayout = getHomeLayout

export default PrivateByHoc