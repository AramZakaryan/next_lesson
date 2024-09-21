import { api } from '../../../assets/api/api'
import { Episode, Response } from '../../../assets/api/api.types'
import { Header } from '../../../components/header/Header'
import { getLayout } from '../../../components/layout/getLayout'

export const getServerSideProps = async () => {
  const episodes = await api.rickAndMortyApi.getEpisodes()

  if (!episodes) return {
    notFound: true
  }

  return { props: { episodes } }
}

type EpisodesProps = { episodes: Response<Episode> }

function Episodes({ episodes }: EpisodesProps) {
  return <>
    <Header />
    <h1 className={'my-3'}>episodes</h1>
    <ul>
      {episodes.results.map(ep => <ul key={ep.id}>
        {`${ep.id}. ${ep.name}`}
      </ul>)}
    </ul>
  </>
}

Episodes.getLayout = getLayout

export default Episodes