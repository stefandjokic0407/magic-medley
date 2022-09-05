import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class GuildsService {

  async getAllGuilds() {
    const guilds = await dbContext.Guilds.find().sort({ createdAt: -1 }).populate('creator', 'name picture')
    return guilds
  }

  async getGuildById(guildId) {
    const guild = await dbContext.Guilds.findById(guildId).populate('creator', 'name picture')
    if (!guild) {
      throw new BadRequest('No guild by this ID')
    }
    return guild
  }

  async createGuild(newGuild) {
    const guild = await dbContext.Guilds.create(newGuild)
    await guild.populate('creator', 'name picture')
    return guild
  }
}

export const guildsService = new GuildsService()