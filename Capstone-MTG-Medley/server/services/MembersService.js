import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"


class MembersService {

  async getMembersByGuildId(guildId) {
    const members = await dbContext.Members.find({ guildId }).populate('profile', 'name picture')
    return members
  }

  async getAccountGuildMemberships(accountId) {
    const memberships = await dbContext.Members.find({ accountId }).populate('profile', 'name picture')
    return memberships
  }

  async joinGuild(newMember) {
    const guild = await dbContext.Guilds.findById(newMember.guildId)
    // @ts-ignore
    guild.members++
    // @ts-ignore
    await guild.save()

    const member = await dbContext.Members.create(newMember)
    await member.populate('profile', 'name picture')
    await member.populate('guild')
    return member
  }

  async removeFromGuild(memberId, userId) {
    const member = await dbContext.Members.findById(memberId)
    if (!member) {
      throw new BadRequest('You are not part of this guild')
    }
    // @ts-ignore
    if (member.accountId.toString() != userId) {
      throw new Forbidden('You cannot remove this member')
    }
    await member.remove()
    const guild = await dbContext.Guilds.findById(member.guildId)
    // @ts-ignore
    guild.members--
    // @ts-ignore
    await guild.save()
    return 'You have been removed from this guild'
  }
}

export const membersService = new MembersService()