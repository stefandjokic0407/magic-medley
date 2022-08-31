import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";


export class CardsController extends BaseController{
    constructor(){
        super('api/account/cards')
        this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .get('', this.getAllAccountCards)
        .get('/:cardId', this.getCardById)
        .post('', this.saveCard)
        .put('/:cardId', this.updateCard)
        .delete('/:cardId', this.deleteCard)
    }

}

