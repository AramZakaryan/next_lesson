import { NextPageWithLayout } from '@/pages/_app'
import { getHomeLayout } from 'components/layout/getHomeLayout'
import Head from 'next/head'
import { GetServerSideProps } from 'next'


export const getServerSideProps: GetServerSideProps = async () => {
  const isAuth = true

  if (!isAuth) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }

  }

  return {
    props: { title: isAuth }
  }
}

const PrivateByRedirect: NextPageWithLayout = () => {
  return <>
    <Head><title>PrivateByRedirect Page</title></Head>
    <p>This is private by redirect page!</p>
  </>
}

PrivateByRedirect.getLayout = getHomeLayout

export default PrivateByRedirect


import { GetServerSideProps } from 'next'
import { wrapper } from '../redux/store' // Import your Redux wrapper

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const isAuth = true

    if (!isAuth) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }

    return {
      props: { title: isAuth }
    }
  }
)
