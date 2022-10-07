import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { api } from "./AxiosService.js";
import { cardsService } from "./CardsService.js";
import { deckCardsService } from "./DeckCardsService.js";

class DecksService {
  async getDeckById(deckId) {
    const res = await api.get("/api/decks/" + deckId);
    logger.log("getting deck by id", res);
    return res.data;
  }
  async createDeck(newDeck) {
    const res = await api.post("/api/decks", newDeck);
    AppState.decks.push(res.data);
    return res.data;
  }

  async deleteDeck(deckId) {
    const res = await api.delete("/api/decks/" + deckId);
    AppState.decks = AppState.decks.filter((d) => d.id != deckId);
    return res;
  }

  async getAccountDecks(accountId) {
    const res = await api.get("/api/decks/profile/" + accountId);
    logger.log("getting all decks", res.data);
    AppState.decks = res.data;
    return res.data;
  }

  async getProfileDecks(accountId) {
    const res = await api.get("/api/decks/profile/" + accountId);
    logger.log("getting all decks", res.data);
    AppState.profileDecks = res.data;
    return res.data;
  }

  async editDeck(deckData) {
    const res = await api.put(`/api/decks/${deckData.id}`, deckData);
    const index = AppState.decks.findIndex((d) => d.id == deckData.id);
    AppState.decks.splice(index, 1, res.data);
    // AppState.activeDeck = {}
  }
  // sends a rating value and the active deck to the service to set a rating
  async rateDeck(rating, deckId, accountId) {
    const res = await api.put("/api/decks/" + deckId + "/" + accountId, rating);
    AppState.activeDeck = res.data;
    // AppState.activeDeck = res.data
  }

  async setActiveDeck(deckId) {
    const res = await this.getDeckById(deckId);
    AppState.activeDeck = res;
    logger.log(res);
  }

  async cloneDeck(){
    let newDeck = {}
    newDeck.picture = AppState.activeDeck.picture
    newDeck.name = AppState.activeDeck.name+' copy'
    newDeck.creatorId = AppState.activeDeck.creatorId || AppState.activeDeck.accountId
    newDeck.accountId = AppState.account.id
    const deck = await this.createDeck(newDeck)
    AppState.duplicates.forEach(d => {
      let newCard = {
        cardId: d.cardId,
        deckId: deck.id,
        accountId: AppState.account.id,
        card: d.card,
        quantity: d.quantity
      }
      deckCardsService.createDeckCard(newCard)
    })
    Pop.success(`You cloned ${AppState.activeDeck.name}!`)
    await cardsService.cloneCards()
  }
}

export const decksService = new DecksService();
