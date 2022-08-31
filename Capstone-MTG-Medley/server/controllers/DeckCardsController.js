import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { cardsService } from "../services/CardsService.js"

export class DeckCardsController extends BaseController {
  constructor() {
    super('api/deckCards')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.addCardToDeck)
      .delete('/:id', this.deleteCardFromDeck)
  }

  async addCardToDeck(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const card = await cardsService.addCardToDeck(req.body)
      return res.send(card)
    } catch (error) {
      next(error)
    }
  }

  async deleteCardFromDeck(req, res, next) {
    try {
      const message = await cardsService.deleteCardFromDeck(req.params.id, req.userInfo.id)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}