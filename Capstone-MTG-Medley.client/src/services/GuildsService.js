import { AppState } from "../AppState"
import { api } from "./AxiosService";


class GuildsService {

  async createGuild(newGuild) {
    const res = await api.post('/api/guilds', newGuild)
    AppState.guilds = res.data
  }

  async getGuilds() {
    const res = await api.get('/api/guilds')
    AppState.guilds = res.data
  }
  async getGuildById(guildId) {
    const res = await api.get(`api/guilds/${guildId}`)
    AppState.activeGuild = res.data
  }

  async getGuildProfile(profileId) {
    const res = await api.get(`api/profiles/${profileId}/members`)
    // const guild = await this.getGuildById(res.data[0].guildId)
    // console.log(AppState.activeGuild)
  }


}

export const guildsService = new GuildsService()