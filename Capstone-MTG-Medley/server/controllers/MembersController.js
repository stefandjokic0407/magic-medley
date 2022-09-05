import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";
import { membersService } from "../services/MembersService";


export class MembersController extends BaseController {
  constructor() {
    super('api/members')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.joinGuild)
      .delete('/:id', this.removeFromGuild)
  }

  async joinGuild(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const member = await membersService.joinGuild(req.body)
      return res.send(member)
    } catch (error) {
      next(error)
    }
  }

  async removeFromGuild(req, res, next) {
    try {
      const message = await membersService.removeFromGuild(req.params.id, req.userInfo.id)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}