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

  async getGuildProfile(){
  const res = await api.get(`account/members/`)
  console.log('Guild Profile',res.data[0].guildId)
  const guild = await this.getGuildById(res.data[0].guildId)
  console.log(AppState.activeGuild)
}


}

export const guildsService = new GuildsService()