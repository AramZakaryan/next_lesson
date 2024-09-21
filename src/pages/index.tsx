import { NextPageWithLayout } from '@/pages/_app'
import { getLayout } from '../../components/layout/getLayout'

const Home: NextPageWithLayout = () => {
  return <p>hello world</p>
}


Home.getLayout = getLayout

export default Home