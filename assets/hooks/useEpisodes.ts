// assets/hooks/useEpisodes.ts

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Episode } from '../api/api.types'

export const useEpisodes = () => {
  const [episodes, setEpisodes] = useState<Episode[]>()

  useEffect(() => {
    axios.get<{ results: Episode[] }>('https://rickandmortyapi.com/api/episode')
      .then(result => {
        setEpisodes(result.data.results)
      })
  }, [])

  return episodes
}