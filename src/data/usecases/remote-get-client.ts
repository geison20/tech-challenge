import { Client } from "../../domain/models/client";
import { GetClient } from "../../domain/usecases/get-client";
import { SocketClient } from "../protocols/socket/socket-client";

export class RemoteGetClient implements GetClient {
  constructor (
    private readonly socketClient: SocketClient,
    public client: Client,
  ){}

  async get(): Promise<Client> {
    this.socketClient.on(
      "client-connected",
      (client) => {
        if(client) {
          this.client = client
        }
      }
    )

    return this.client
  }

}