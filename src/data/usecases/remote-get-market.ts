import { Market } from "../../domain/models/market";
import { GetMarket } from "../../domain/usecases/get-market";
import { SocketClient } from "../protocols/socket/socket-client";

export class RemoteGetMarket implements GetMarket {
  constructor (
    private readonly socketClient: SocketClient
  ){}
  
  async get(callback: (e: any) => any): Promise<Market> {
    return this.socketClient.on({ type: "market-data", callback })
  }

  disconnect() {
    this.socketClient.disconnect()
  }
}