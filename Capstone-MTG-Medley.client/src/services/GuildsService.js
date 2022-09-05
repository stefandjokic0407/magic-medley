import { AppState } from "../AppState"
import { api } from "./AxiosService";


class GuildsService {

  async createGuild(newGuild) {
    const res = await api.post('/api/guilds', newGuild)
    AppState.guilds = res.data
    console.log(res.data, AppState.guilds);
  }

  async getGuilds() {
    const res = await api.get('/api/guilds')
    AppState.guilds = res.data
  }
  async getGuildById(guildId) {
    const res = await api.get(`api/guilds/${guildId}`)
    AppState.activeGuild = res.data
  }
}

export const guildsService = new GuildsService()