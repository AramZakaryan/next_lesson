import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { Location, Response } from '../../../assets/api/api.types'
import { Header } from '../../../components/header/Header'
import { getLayout } from '../../../components/layout/getLayout'

const getLocations = async (): Promise<Response<Location>> => {
  const res = await fetch('https://rickandmortyapi.com/api/location', {
    method: 'GET'
  })
  return await res.json()
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.fetchQuery({
    queryKey: ['locations'],
    queryFn: getLocations
  })

  return { props: { dehydratedState: dehydrate(queryClient) } }
}

function Locations() {
  const { data: locations, error, isLoading } = useQuery<Response<Location>>({
    queryKey: ['locations'],
    queryFn: getLocations
  })

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>Error loading locations</p>

  if (!locations) {
    return null
  }
  return <>
    <Header />
    <h1 className={'my-3'}>locations</h1>
    <ul>
      {locations.results.map(l => <li key={l.id}>
        {`${l.id}. ${l.name}`}
      </li>)
      }
    </ul>
  </>
}

Locations.getLayout = getLayout

export default Locations