import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class DecksService {
  async getDeckById(deckId) {
    const res = await api.get("/api/decks/" + deckId);
    logger.log("getting deck by id", res);
    return res.data;
  }
  async createDeck(newDeck) {
    const res = await api.post("/api/decks", newDeck);
    AppState.decks = res.data;
    return res.data;
  }

  async deleteDeck(deckId) {
    const res = await api.delete('/api/decks/' + deckId)
    AppState.decks = AppState.decks.filter(d => d.id != deckId)
    return res
  }

  async getAccountDecks(accountId) {
    const res = await api.get('/api/decks/profile/' + accountId);
    logger.log("getting all decks", res.data);
    AppState.decks = res.data;
    return res.data;
  }

  async editDeck(deckData){
    const res = await api.put(`/api/decks/${deckData.id}`, deckData)
    const index = AppState.decks.findIndex(d => d.id == deckData.id)
    AppState.decks.splice(index, 1, res.data)
    // AppState.activeDeck = {}
  }

  async setActiveDeck(deckId) {
    const res = await this.getDeckById(deckId);
    AppState.activeDeck = res;
    logger.log(res);
    console.log(AppState.activeDeck);
  }

}

export const decksService = new DecksService();
