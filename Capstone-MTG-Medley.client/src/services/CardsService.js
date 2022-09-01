import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { Card } from "../models/Card.js"
import { api, mtg, search } from "./AxiosService"

class CardsService {
  async getCardsBySearch(searchTerm, filterTerm) {

    // if (AppState.searchByColor == true) { searchTerm += '+color%3d' + (AppState.colors.toString()) }
    // console.log('this is the moddified search term', searchTerm)

    // if (AppState.searchByType) { searchTerm += '+type%3A' + searchTerm }

    // if (AppState.searchByRarity) { searchTerm += '+rarity%3A' + AppState.rarity }

    // if (AppState.searchByText) {}

    const colorFilter = '+color%3D' + filterTerm
    const rarityFilter = 'rarity%3A' + filterTerm
    // console.log(colorFilter, searchTerm, filterTerm);
    const res = await search.get(searchTerm + rarityFilter + colorFilter)
    AppState.searchedCards = res.data.data.map(c => new Card(c))
    // AppState.cards = res.data.
  }
  
  async searchBarGet(searchTerm) {
    const res = await search.get(searchTerm)
    AppState.searchedCards = res.data.data.map(c => new Card(c))
    AppState.nextPage = res.data.next_page
    console.log('next page', AppState.nextPage)
    AppState.previousPage = res.data.previous_page
  }

  async getRandomCard() {
    const res = await mtg.get('cards/random')
    AppState.card = res.data
  }

  async cardsById(oracleCardId) {
    const res = await mtg.get('cards/' + oracleCardId)
    console.log('Oracle Card Id', res.data)
    AppState.activeCard = res.data
  }

  async getCardByOracle(oracleId) {
    // console.log('Oracle ID:', oracleId)
    const res = await mtg.get('cards/search?q=oracleid%3A' + oracleId + "&unique=prints")
    AppState.oracleCard = res.data.data.map(c => new Card(c))
    console.log('Getting card by oracle', AppState.oracleCard)
  }

  async changePage(url){
    const res = await search.get(url)
    AppState.searchedCards = res.data.data.map(c => new Card(c))
    AppState.nextPage = res.data.next_page
    console.log('next page', AppState.nextPage)
    AppState.previousPage = res.data.previous_page
  }

  async createCard(newCard) {
    const res = await api.post('/account/cards', newCard)
    logger.log('Adding Card to Profile', res.data)
    AppState.activeProfile = res.data
  }
}


export const cardsService = new CardsService()