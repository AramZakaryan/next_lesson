import { Nullable } from '../../types/general.types'

export type ResourceBase = {
  id: number      // Unique identifier for the resource
  name: string    // Name of the resource
  created: string // Date in string format when the resource was created
  url: string     // URL to the resource
}


export type Character = ResourceBase & {
  episode: string[]                    // Array of episode URLs
  gender: CharacterGender              // Gender of the character
  image: string                        // URL to the character's image
  location: CharacterLocation          // Location object containing name and URL
  origin: CharacterLocation            // Origin location object
  species: string                      // Species of the character
  status: CharacterStatus // Current status of the character
  type: string                         // Type of the character (if applicable)
}

export type CharacterLocation = {
  name: string // The name of the location
  url: string  // The URL to the location resource
}

export type CharacterStatus = 'Dead' | 'Alive' | 'unknown'
export type CharacterGender = 'unknown' | 'Female' | 'Male' | 'Genderless'


export type Location = ResourceBase & {
  dimension: string       // Dimension in which the location exists
  residents: string[]     // Array of resident URLs
  type: string            // Type of the location (e.g., "Planet", "Space Station")
}


export type Episode = ResourceBase & {
  air_date: string       // Air date of the episode
  characters: string[]   // Array of character URLs featured in the episode
  episode: string        // Episode code (e.g., "S01E01")
}


export type Response<T=undefined> = {
  info: InfoType
  results: T[]
}

export type InfoType = {
  count: number           // The length of the response
  pages: number           // The amount of pages
  next: Nullable<string>  // Link to the next page (if it exists)
  prev: Nullable<string>  // Link to the previous page (if it exists)
}

