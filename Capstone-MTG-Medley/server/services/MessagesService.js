import { dbContext } from "../db/DbContext"

class MessagesService {

  async sendMessage(newMessage) {
    const message = await dbContext.Messages.create(newMessage)
    await message.populate('creator', 'name picture')
    return message
  }

  async getMessagesByGuildId(query) {
    const messages = await dbContext.Messages.find(query).populate('creator', 'name picture')
    return messages
  }
}

export const messagesService = new MessagesService()