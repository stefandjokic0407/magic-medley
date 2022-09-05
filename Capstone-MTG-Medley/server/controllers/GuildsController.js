import { Auth0Provider } from "@bcwdev/auth0provider";
import { guildsService } from "../services/GuildsService";
import { membersService } from "../services/MembersService";
import { messagesService } from "../services/MessagesService";
import BaseController from "../utils/BaseController";


export class GuildsController extends BaseController {
  constructor() {
    super('api/guilds')
    this.router
      .get('', this.getAllGuilds)
      .get('/:id', this.getGuildById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createGuild)
      .get('/:id/messages', this.getMessagesByGuildId)
      .get('/:id/members', this.getMembersByGuildId)

  }
  async getMessagesByGuildId(req, res, next) {
    try {
      const messages = await messagesService.getMessagesByGuildId({ guildId: req.params.id })
      return res.send(messages)
    } catch (error) {
      next(error)
    }
  }

  async createGuild(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const guild = await guildsService.createGuild(req.body)
      return res.send(guild)
    } catch (error) {
      next(error)
    }
  }

  async getAllGuilds(req, res, next) {
    try {
      const guilds = await guildsService.getAllGuilds()
      return res.send(guilds)
    } catch (error) {
      next(error)
    }
  }

  async getGuildById(req, res, next) {
    try {
      const guild = await guildsService.getGuildById(req.params.id)
      return res.send(guild)
    } catch (error) {
      next(error)
    }
  }

  async getMembersByGuildId(req, res, next) {
    try {
      const members = await membersService.getMembersByGuildId(req.params.id)
      return res.send(members)
    } catch (error) {
      next(error)
    }
  }
}