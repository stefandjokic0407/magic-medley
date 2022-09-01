import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"


class DeckCardsService{
  async createDeckCard(cardId, deckId){
    const deckCard = {}
    deckCard.cardId = cardId
    deckCard.deckId = deckId
    const res = await api.post('api/deckCards', deckCard)
    AppState.deckCards.push(res.data)
  }


}
export const deckCardsService = new DeckCardsService()