import { AppState } from "../AppState"
import { api } from "./AxiosService"

class MessagesService {
  async sendMessage(newMessage) {
    const res = await api.post('/api/messages', newMessage)
    AppState.messages.push(res.data)
  }

  async getMessages(guildId) {
    const res = await api.get(`/api/guilds/${guildId}/messages`)
    AppState.messages = res.data
  }
}

export const messagesService = new MessagesService()