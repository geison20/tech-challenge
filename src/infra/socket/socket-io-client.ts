import { SocketClient } from "../../data/protocols/socket/socket-client"

import io from "socket.io-client"

const ENDPOINT = `http://${window.location.hostname}:3003`//Move to .env

export class SocketIOClient implements SocketClient {
  constructor (
    private readonly socketIO = io(ENDPOINT),
  ){}

  on(params: SocketClient.Params) {
    try {
      this.socketIO.on(params.type, params.callback)
    } catch (error) {
      return error
    }
  }

  disconnect() {
    this.socketIO.disconnect()
  }
}