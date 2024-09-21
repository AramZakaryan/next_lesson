import { AxiosInstance } from 'axios'
import { Character, Response } from './api.types'


export class RickAndMortyApi {
  constructor(private instance: AxiosInstance) {
  }

  public getCharacters() {
    return this.instance.get<Response<Character[]>>('character')
      .then((res) => res.data)
  }

  public getCharacter(id: string) {
    return this.instance.get<Character>(`character/${id}`)
      .then((res) => res.data)
  }

  public getLocations() {
    return this.instance.get<Character>(`location`)
      .then((res) => res.data)
  }

  public getLocation(id: string) {
    return this.instance.get<Character>(`location/${id}`)
      .then((res) => res.data)
  }

  public getEpisodes() {
    return this.instance.get<Character>(`episode`)
      .then((res) => res.data)
  }

  public getEpisode(id: string) {
    return this.instance.get<Character>(`episode/${id}`)
      .then((res) => res.data)
  }

}