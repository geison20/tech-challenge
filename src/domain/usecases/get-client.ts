import { Client } from "../models/client"

export interface GetClient {
  get(callback: (e: any) => any): Promise<Client>
  disconnect(): any
}