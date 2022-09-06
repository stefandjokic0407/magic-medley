import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { Card } from "../models/Card.js"
import { api, mtg, search } from "./AxiosService"
import Pop from "../utils/Pop.js"

const baseSearch = 'search?as=grid&order=name&q='

class CardsService {

  // NOTE this is connected to the search bar and works
  async getCardsBySearch(searchTerm, filterTerm) {
    let manaTerm = ''
    let powerTerm = ''
    let toughnessTerm = ''
    try {
      // if (AppState.searchByColor == true) { searchTerm += '+color%3d' + (AppState.colors.toString()) }
      // console.log('this is the modified search term', searchTerm)
      if (AppState.searchByName) { searchTerm = searchTerm }

      if (AppState.searchByType) { searchTerm = '+type%3A' + searchTerm }
      // logger.log('and and sav',searchTerm)

      if (AppState.searchByText) { searchTerm = '+oracle%3A' + searchTerm }

      if (filterTerm.color.length > 0) { searchTerm += '+color<%3D' + filterTerm.color }

      if (filterTerm.rarity) { searchTerm += '+rarity%3A' + filterTerm.rarity }

      if (filterTerm.format) { searchTerm += '+legal%3A' + filterTerm.format }

      if (filterTerm.set) { searchTerm += '+set%3A' + filterTerm.set }

      if (AppState.manaEqual) {
        manaTerm = '+cmc%3D'
      } else if (AppState.manaLesser) {
        manaTerm = '+cmc%3d<'
      } else if (AppState.manaGreater) {
        manaTerm = '+cmc%3d>'
      }
      if (filterTerm.mana) { searchTerm += manaTerm + filterTerm.mana }

      if (AppState.powerEqual) {
        powerTerm = '+pow%3D'
      } else if (AppState.powerLesser) {
        powerTerm = '+pow%3d<'
      } else if (AppState.powerGreater) {
        powerTerm = '+pow%3d>'
      }

      if (filterTerm.power) { searchTerm += powerTerm + filterTerm.power }

      if (AppState.toughnessEqual) {
        toughnessTerm = '+tou%3D'
      } else if (AppState.toughnessLesser) {
        toughnessTerm = '+tou%3d<'
      } else if (AppState.toughnessGreater) {
        toughnessTerm = '+tou%3d>'
      }
      if (filterTerm.toughness) { searchTerm += toughnessTerm + filterTerm.toughness }


      console.log('AAS searchTerm', searchTerm, 'filterTerm', filterTerm);

      const res = await search.get(baseSearch + searchTerm)
      AppState.searchedCards = res.data.data.map(c => new Card(c))
      AppState.nextPage = res.data.next_page
    } catch (error) {
      if (!searchTerm) {
        Pop.error('Too many results, please refine your search')
      } else if (searchTerm) {
        Pop.error('No results, please refine your search')

      }
      logger.error(error)
    }
  }


  // TODO do we really need this?
  async getAlphaSearch(searchTerm) {
    const res = await search.get(baseSearch + searchTerm)
    AppState.searchedCards = res.data.data.map(c => new Card(c))
  }

  // async getRandomCard() {
  //   const res = await mtg.get('cards/random')
  //   AppState.card = res.data
  // }

  async getAccountCards() {
    const res = await api.get('account/cards')
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

  async changePage(url) {
    const res = await search.get(url)
    AppState.searchedCards = [...AppState.searchedCards, ...res.data.data.map(c => new Card(c))]
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
  async removeCard(cardId) {
    const res = await api.delete('account/cards/' + cardId)
    AppState.collection = AppState.collection.filter(c => c.id != cardId)
    return res
  }
}



export const cardsService = new CardsService()