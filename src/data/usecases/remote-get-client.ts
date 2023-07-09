import { Client } from "../../domain/models/client";
import { GetClient } from "../../domain/usecases/get-client";
import { SocketClient } from "../protocols/socket/socket-client";

export class RemoteGetClient implements GetClient {
  constructor (
    private readonly socketClient: SocketClient
  ){}

  async get(callback: (e: any) => any): Promise<Client> {
    return this.socketClient.on({ type: "client-connected", callback })
  }

  disconnect() {
    this.socketClient.disconnect()
  }
}