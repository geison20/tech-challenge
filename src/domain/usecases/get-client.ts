import { Client } from "../models/client"

export interface GetClient {
  get(): Promise<Client>
}