import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class DecksService{
    async createDeck(newDeck){
    const res = await api.post('/api/decks', newDeck)
    AppState.decks = res.data
    return res.data
    }

    async getAccountDecks(){
        const res = await api.get('/api/decks')
        logger.log('getting all decks', res.data)
        AppState.decks.push(res.data)
        return res.data
    }

}


export const decksService = new DecksService()