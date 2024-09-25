// src/pages/episodesHook/index.tsx

import { getPageLayout } from 'components/layout/getPageLayout'
import Head from 'next/head'
import { useEpisodes } from '@/hooks/useEpisodes'

function EpisodesHook() {

  const episodes=useEpisodes()

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

EpisodesHook.getLayout = getPageLayout

export default EpisodesHook
