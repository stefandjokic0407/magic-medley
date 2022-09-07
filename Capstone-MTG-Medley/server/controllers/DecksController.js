import { Auth0Provider } from "@bcwdev/auth0provider";
import { decksService } from "../services/DecksService.js";
import BaseController from "../utils/BaseController.js";


export class DecksController extends BaseController {
    constructor() {
        super('api/decks')
        this.router
            .get('/:id/deckcards', this.getDeckCards)
            .get('', this.getAllDecks)
            .get('/:id', this.getDeckById)
            .get("/:accountId", this.getDecksByAccountId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createDeck)
            .put('/:id', this.editDeck)
            .delete('/:id', this.deleteDeck)
    }

    async getDecksByAccountId(req, res, next) {
        try {
            console.log(req.body);
            const decks = await decksService.getDecksByAccountId(req.body);
            return res.send(decks);
        } catch (error) {
            next(error);
        }
    }

    async getAllDecks(req, res, next) {
        try {
            const decks = await decksService.getAllDecks()
            return res.send(decks)
        } catch (error) {
            next(error)
        }
    }

    async getDeckCards(req, res, next) {
        try {
            const cards = await decksService.getDeckCards({ deckId: req.params.id })
            return res.send(cards)
        } catch (error) {
            next(error)
        }
    }

    async getDeckById(req, res, next) {
        try {
            const deck = await decksService.getById(req.params.id)
            return res.send(deck)
        } catch (error) {
            next(error)
        }
    }

    async createDeck(req, res, next) {
        try {
            req.body.accountId = req.userInfo.id
            const deck = await decksService.createDeck(req.body)
            return res.send(deck)
        } catch (error) {
            next(error)
        }
    }

    async editDeck(req, res, next) {
        try {
            let deck = await decksService.editDeck(req.params.id, req.userInfo.id, req.body)
            return res.send(deck)
        } catch (error) {
            next(error)
        }
    }

    async addRating(req, res, next) {
        try {
            // the body should be an object with a value {value: 5}
            let rating = req.body
            rating.creatorId = req.userInfo.id
            let deck = await decksService.addRating(req.params.deckId, rating)
            return res.send(deck)
        } catch (error) {
            next(error)
        }
    }

    async deleteDeck(req, res, next) {
        try {
            const response = await decksService.deleteDeck(req.params.id)
            return res.send(response)
        } catch (error) {
            next(error)
        }
    }

}