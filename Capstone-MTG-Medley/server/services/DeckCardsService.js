import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class DeckCardsService{

  async deleteCardFromDeck(deckCardId, userId) {

    const card = await dbContext.DeckCards.findById(deckCardId)
    if(!card){
      throw new BadRequest('Card does not exist in that deck!')
    }
    // @ts-ignore
    // if(card.accountId.toString() != userId){
    //   throw new Forbidden('You are not authorized to make changes to this deck')
    // }
    await card.remove()
    return 'Card has been removed from deck'
  }
  
  async addCardToDeck(data) {
    //                 ^^^  this needs an ID generated on client side, a deck ID and a Card Id
    const deckCard = await dbContext.DeckCards.create(data)
    await deckCard.populate('deck', 'name picture')
    await deckCard.populate('card', 'name image_uris')
    return deckCard
  }

}
export const deckCardsService = new DeckCardsService()