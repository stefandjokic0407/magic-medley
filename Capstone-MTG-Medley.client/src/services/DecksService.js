import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class DecksService{
    async createDeck(newDeck){
    const res = await api.post('/api/decks', newDeck)
    logger.log('Creating Deck', res.data)
    AppState.decks = res.data
    return res.data
    }

}


export const decksService = new DecksService()