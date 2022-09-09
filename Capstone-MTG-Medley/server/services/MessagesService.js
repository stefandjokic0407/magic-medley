import { dbContext } from "../db/DbContext"
import { socketProvider } from "../SocketProvider"

class MessagesService {

  async sendMessage(newMessage) {
    const message = await dbContext.Messages.create(newMessage)
    await message.populate('creator', 'name picture')
    socketProvider.messageRoom('guild-' + newMessage.guildId, 'new:message', message)
    return message
  }

  async getMessagesByGuildId(query) {
    const messages = await dbContext.Messages.find(query).populate('creator', 'name picture')
    return messages
  }
}

export const messagesService = new MessagesService()