import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class DeckCardsService{
  async createDeckCard(deckCard){
    const res = await api.post('api/deckCards', deckCard)
    AppState.deckCards.push(res.data)
  }

  async getDeckCards(deckId){
    const res = await api.get('api/decks/'+deckId+'deckCards')
  }

}
export const deckCardsService = new DeckCardsService()