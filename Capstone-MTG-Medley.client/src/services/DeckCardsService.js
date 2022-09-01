import { api } from "./AxiosService.js"


class DeckCardsService{
  async createDeckCard(cardId, deckId){
    const deckCard = {}
    deckCard.cardId = cardId
    deckCard.deckId = deckId
    const res = await api.post('api/deckCards', deckCard)
    
  }


}
export const deckCardsService = new DeckCardsService()