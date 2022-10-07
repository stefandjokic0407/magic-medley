import { AppState } from "../AppState"
import { api } from "./AxiosService"


class MembersService {
  async getGuildMembers(guildId) {
    const res = await api.get(`/api/guilds/${guildId}/members`)
    AppState.members = res.data
  }

  async joinGuild(newMember) {
    const res = await api.post('/api/members', newMember)
    AppState.members.push(res.data)
    AppState.activeGuild.members++
  }

  async removeFromGuild(removedMemberId) {
    const res = await api.delete(`/api/members/${removedMemberId}`)
    AppState.members = AppState.members.filter(m => m.id != removedMemberId)
    AppState.activeGuild.members--
  }


}

export const membersService = new MembersService()