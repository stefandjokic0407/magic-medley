import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class DeckCardsService{
  async deleteTicket(ticketId, userId) {
    
    const ticket = await dbContext.Tickets.findById(ticketId)
    if(!ticket){
      throw new BadRequest('Ticket does not exist!')
    }
    // @ts-ignore
    if(ticket.accountId.toString() != userId){
      throw new Forbidden('You can not remove that')
    }
    // @ts-ignore
    const eventId = ticket.eventId.toString()
    await eventsService.increaseCapacity(eventId)
    await ticket.remove()
    return 'You are no longer attending this event'
  }
  async deleteCardFromDeck(id, id) {
    throw new Error("Method not implemented.");
  }
  
  async getCardsByDeckId(deckId) {
    const cards = await dbContext.Cards.find({deckId}).populate('deck', 'name')
    return cards
  }

  async addCardToDeck(body) {
    const deck = await this.getDById(data.eventId)
    // @ts-ignore
    if (event.capacity <= 0){
      throw new BadRequest('this event is full')
    } 
    const ticket = await dbContext.Tickets.create(data)
    await ticket.populate('event', 'name coverImg startDate')
    await ticket.populate('profile', 'name picture')
    // @ts-ignore
    const eventId = ticket.eventId.toString()
    await eventsService.reduceCapacity(eventId)
    return ticket
  }

}
export const deckCardsService = new DeckCardsService()