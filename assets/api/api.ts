import { RickAndMortyApi } from './rick_and_morty_api'
import { instanceRickAndMorty } from './instances'


const rickAndMortyApi = new RickAndMortyApi(instanceRickAndMorty)

export const api = {
  rickAndMortyApi,
  nextApi: undefined
}