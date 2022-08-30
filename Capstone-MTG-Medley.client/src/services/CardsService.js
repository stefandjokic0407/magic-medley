import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { mtg } from "./AxiosService"

class CardsService {
  async getCardsBySearch() {
    const res = await mtg.get("cards")
  }
  async getCardsByName() {
    const res = await mtg.get()
  }
  
  async cardsAutocomplete() {
    const res = await mtg.get()
  }
  
  async getRandomCard() {
    const res = await mtg.get('cards/random')
    console.log('Getting Random Card:', res.data)
    AppState.card = res.data
  }
  
  async cardsCollection() {
    const res = await mtg.get()
  }
  
  async cardsById() {
    const res = await mtg.get()
  }
}


export const cardsService = new CardsService()