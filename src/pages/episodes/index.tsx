import { api } from 'assets/api/api'
import { Episode, Response } from 'assets/api/api.types'
import { getPageLayout } from 'components/layout/getPageLayout'
import Head from 'next/head'

export const getServerSideProps = async () => {
  const episodes = await api.rickAndMortyApi.getEpisodes()

  if (!episodes) return {
    notFound: true
  }

  return { props: { episodes } }
}

type EpisodesProps = { episodes: Response<Episode> }

function Episodes({ episodes }: EpisodesProps) {
  return (
    <>
      <Head>
        <title>Episodes</title>
      </Head>
      <ul className="flex flex-col items-center space-y-4">
        {episodes.results.map(ep => (
          <li key={ep.id} className="bg-white shadow-md rounded-lg p-4 w-full max-w-md text-left">
            {`${ep.id}. ${ep.name}`}
          </li>
        ))}
      </ul>
    </>
  )
}

Episodes.getLayout = getPageLayout

export default Episodes
