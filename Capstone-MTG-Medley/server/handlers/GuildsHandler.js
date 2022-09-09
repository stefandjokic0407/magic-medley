import { logger } from "../utils/Logger";
import { SocketHandler } from "../utils/SocketHandler";


export class GuildsHandler extends SocketHandler {
  /**
    * @param {import("socket.io").Server} io
    *@param {import("socket.io").Socket} socket
    */
  constructor(io, socket) {
    super(io, socket)
    this
      .on('socket:test', this.testGuild)
      .on('join:guild', this.joinGuild)
  }

  async joinGuild(payload) {
    logger.log('joined room', payload.guildName)
    this.socket.join(payload.guildName)
    this.socket.emit('joined:guild', payload)
  }

  async testGuild(payload) {
    logger.log('socket test successful')
    this.socket.emit('is:tested', payload)
  }
}