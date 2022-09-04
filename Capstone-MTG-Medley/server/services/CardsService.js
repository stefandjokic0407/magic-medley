import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js"


class CardsService{
  async getAllAccountCards(accountId) {
    const cards = await dbContext.Cards.find({accountId})
    return cards
  }
  async getCardById(cardId) {
    const card = await dbContext.Cards.findById(cardId).populate('account', 'name picture')
    // if(!card) { throw new BadRequest('invalid Card')}
    return card
  }
  async createCard(body) {
    
    const collectionCard = await dbContext.Cards.findOne({oracle_id:body.oracle_id})
    
    if(!collectionCard){
    const card = await dbContext.Cards.create(body)
    await card.populate('account', 'name picture')
    return card
    }
    // @ts-ignore
    collectionCard.count + 1
    collectionCard.image_uris = body.image_uris
    // @ts-ignore
    await collectionCard.save()
    // @ts-ignore
    return collectionCard
  }
  async updateCard(cardId, cardData) {
    const card = await this.getCardById(cardId)
    // @ts-ignore
    card.count = cardData.count || card.count
    // @ts-ignore
    card.prices = cardData.prices || card.prices
    // @ts-ignore
    await card.save()
    return card
  }

  async deleteCard(cardId) {
    const card = await dbContext.Cards.findById(cardId)
    if(!card){ throw new BadRequest('that card does not exist') }
    // @ts-ignore
    if(card.count > 0){
      // @ts-ignore
      card.count--
      card.save()
    }
    card.remove()
    return `${card.name} has been removed from your collection`
  }
    
}


export const cardsService = new CardsService()