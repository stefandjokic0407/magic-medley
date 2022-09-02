import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class DecksService{

    async getDeckById(deckId){
        const res = await api.get('/api/decks/'+ deckId)
        logger.log('getting deck by id', res)
        return res.data
    }
    async createDeck(newDeck){
    const res = await api.post('/api/decks', newDeck)
    AppState.decks = res.data
    return res.data
    }

    async getAccountDecks(userId){
        const res = await api.get('/account/decks/' + userId)
        logger.log('getting all decks', res.data)
        AppState.decks = res.data
        return res.data
    }

    async setActiveDeck(deckId){
        const res = await this.getDeckById(deckId)
        AppState.activeDeck = res
        logger.log(res)
        console.log(AppState.activeDeck)
    }

}


export const decksService = new DecksService()