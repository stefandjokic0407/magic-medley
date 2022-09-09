import { AppState } from "../AppState"
import { api } from "./AxiosService"

class MessagesService {
  async sendMessage(newMessage) {
    const res = await api.post('/api/messages', newMessage)
    console.log('creating message', res.data);
    // AppState.messages.push(res.data)
    // Sockets now pushed into array by sockets
  }

  async getMessages(guildId) {
    const res = await api.get(`/api/guilds/${guildId}/messages`)
    AppState.messages = res.data
  }
}

export const messagesService = new MessagesService()