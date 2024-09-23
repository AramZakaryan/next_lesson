import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { Location, Response } from 'assets/api/api.types'
import { getPageLayout } from 'components/layout/getPageLayout'
import Head from 'next/head'

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

  if (isLoading) return <p className="text-center">Loading...</p>

  if (error) return <p className="text-center text-red-500">Error loading locations</p>

  if (!locations) {
    return null
  }

  return (
    <>
      <Head>
        <title>Locations</title>
      </Head>
      <ul className="flex flex-col items-center space-y-4">
        {locations.results.map(l => (
          <li key={l.id} className="bg-white shadow-md rounded-lg p-4 w-full max-w-md text-left">
            {`${l.id}. ${l.name}`}
          </li>
        ))}
      </ul>
    </>
  )
}

Locations.getLayout = getPageLayout

export default Locations
