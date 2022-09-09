import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('joined:guild', this.joinedGuild)
      .on('new:message', this.newMessage)
  }

  joinGuild(guildName = 'general') {
    this.emit('join:guild', { guildName })
    console.log(guildName);
  }

  joinedGuild(payload) {
    logger.log('[socket joined room', payload.guildName)
  }

  newMessage(payload) {
    console.log('new:message', payload);
    AppState.messages.push(payload)
  }

  onError(e) {
    Pop.toast(e.message, 'error')
  }
}

export const socketService = new SocketService()
