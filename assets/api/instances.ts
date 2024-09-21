import axios from 'axios'

export const instanceNext = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

export const instanceRickAndMorty = axios.create({
  baseURL: process.env.RICH_AND_MORTY_PUBLIC_API_URL
})