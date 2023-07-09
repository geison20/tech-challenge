import { Market } from "../../domain/models/market";
import { GetMarket } from "../../domain/usecases/get-market";
import { SocketClient } from "../protocols/socket/socket-client";

export class RemoteGetMarket implements GetMarket {
  constructor (
    private readonly socketClient: SocketClient,
    public market: Market,
  ){}

  async get(): Promise<Market> {
    this.socketClient.on(
      "market-data",
      (data) => {
        if(data) {
          this.market = data
        }
      }
    )

    return this.market
  }

  filter(params: GetMarket.Params): Market {
    return params.data[0]
  }
}