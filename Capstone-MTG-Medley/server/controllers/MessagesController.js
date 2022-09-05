import { Auth0Provider } from "@bcwdev/auth0provider";
import { messagesService } from "../services/MessagesService";
import BaseController from "../utils/BaseController";


export class MessagesController extends BaseController {
  constructor() {
    super('api/messages')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.sendMessage)

  }

  async sendMessage(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const message = await messagesService.sendMessage(req.body)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }

}