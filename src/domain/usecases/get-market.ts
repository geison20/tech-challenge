import { Market } from "../models/market"

export interface GetMarket {
  get(callback: (e: any) => any): Promise<Market>
  disconnect(): any
}
