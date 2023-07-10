import { User } from "../../domain/models/user";
import { GetUser } from "../../domain/usecases/get-user";
import { SocketClient } from "../protocols/socket/socket-client";

//Create a factory for this to avoid code repetition with remote-get-market
export class RemoteGetUser implements GetUser {
  constructor (
    private readonly socketClient: SocketClient
  ){}

  async get(callback: (e: any) => any): Promise<User> {
    return this.socketClient.on({ type: "client-connected", callback })
  }

  disconnect() {
    this.socketClient.disconnect()
  }
}