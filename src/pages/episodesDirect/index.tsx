// src/pages/episodesDirect/index.tsx

import { Episode } from 'assets/api/api.types'
import { getPageLayout } from 'components/layout/getPageLayout'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'

function EpisodesDirect() {
  const [episodes, setEpisodes] = useState<Episode[]>()

  useEffect(() => {
    axios.get<{ results: Episode[] }>('https://rickandmortyapi.com/api/episode')
      .then(result => setEpisodes(result.data.results))
  }, [])

  return (
    <>
      <Head>
        <title>EpisodesDirect</title>
      </Head>
      <ul className="flex flex-col items-center space-y-4">
        {episodes?.map(ep => (
          <li key={ep.id} className="bg-white shadow-md rounded-lg p-4 w-full max-w-md text-left">
            {`${ep.id}. ${ep.name}`}
          </li>
        ))}
      </ul>
    </>
  )
}

EpisodesDirect.getLayout = getPageLayout

export default EpisodesDirect
