import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class DecksService {

  async createDeck(deckData) {
    const deck = await dbContext.Decks.create(deckData)
    await deck.populate('profile', 'name picture')
    return deck
  }

  async getById(id) {
    const deck = await dbContext.Decks.findById(id)
    .populate('profile', 'name picture')
    if (!deck) {
      throw new BadRequest('Invalid Deck')
    }
    return deck
  }
  
  async getDeckCards(query = {}) {
    const deckCards = await dbContext.DeckCards.find(query).populate('card', 'name image_uris')
    return deckCards
  }
  async getAllDecks(query = {}) {
    const decks = await dbContext.Decks.find(query).populate('profile', 'name picture')
    return decks 
  }

  async getDecksByAccountId(accountId) {
    const decks = await dbContext.Decks.find({ accountId }).populate('profile', 'name picture')
    return decks
  }

  async editDeck(deckId, id, deckData) {
    let deck = await this.getById(deckId)
    // @ts-ignore
    if (deck.accountId.toString() != id) {
      throw new Forbidden('You cannot edit this')
    }

    deck.name = deckData.name || deck.name
    deck.description = deckData.description || deck.description
    deck.picture = deckData.picture || deck.picture

    await deck.save()
    return deck
  }
// add a rating to a deckId rating array
  async addRating(deckId, rating){
    // get the deck by its id
    const deck = await this.getById(deckId)
    // check if user has already voted
    let oldRating = deck.rating.find(d=>d.creatorId == rating.creatorId)
    if(oldRating){
      oldRating.value = rating.value
    } else {
      deck.rating.push(rating)
    }
    await deck.save()
    return deck
  }

  async deleteDeck(deckId) {
    const deck = await dbContext.Decks.findById(deckId)
    if (!deck) {
      throw new BadRequest('Deck does not exist')
    }
    await dbContext.DeckCards.deleteMany({ deckId })
    await deck.remove()
    return `${deck.name} has been deleted`
  }
}


export const decksService = new DecksService()