import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { Card } from "../models/Card.js"
import { api, mtg, search } from "./AxiosService"

class CardsService {

  // NOTE this is connected to the search bar and works
  async getCardsBySearch(searchTerm, filterTerm) {

    // if (AppState.searchByColor == true) { searchTerm += '+color%3d' + (AppState.colors.toString()) }
    // console.log('this is the modified search term', searchTerm)

    if (AppState.searchByType) { searchTerm = '+type%3A' + searchTerm }
    // logger.log('and and sav',searchTerm)
    
    if (AppState.searchByText) { searchTerm = '+oracle%3A' + searchTerm }
    
    if (AppState.filterByColor) { searchTerm += '+color%3D' + filterTerm.color }
    
    if(AppState.filterByRarity) { searchTerm += '+rarity%3A' + filterTerm.rarity}


    console.log('and and sav', searchTerm, filterTerm);

    const res = await search.get(searchTerm)
    AppState.searchedCards = res.data.data.map(c => new Card(c))
  }


  // TODO do we really need this?
  // async searchBarGet(searchTerm) {
  //   const res = await search.get(searchTerm)
  //   AppState.searchedCards = res.data.data.map(c => new Card(c))
  //   AppState.nextPage = res.data.next_page
  //   console.log('next page', AppState.nextPage)
  //   AppState.previousPage = res.data.previous_page
  // }

  // async getRandomCard() {
  //   const res = await mtg.get('cards/random')
  //   AppState.card = res.data
  // }

  async getAccountCards(){
    const res = await api.get('account/cards')
    console.log('Getting Account Cards', res.data)
    AppState.collection = res.data.map(c => new Card(c))
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
    return res.data
  }
}


export const cardsService = new CardsService()