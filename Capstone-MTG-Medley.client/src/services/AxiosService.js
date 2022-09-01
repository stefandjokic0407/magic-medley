import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const mtg = Axios.create({
  baseURL: 'https://api.scryfall.com/',
  timeout: 4000
})

export const search = Axios.create({
  baseURL: 'https://api.scryfall.com/cards/',
  timeout: 4000
})