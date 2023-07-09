import { Market } from "../models/market"

export interface GetMarket {
  get(callback: (e: any) => any): Promise<Market>
  disconnect(): any
  filter(params: GetMarket.Params): Market
}

export namespace GetMarket  {
  export type Params = {
    terms: string
    data: Market[]
  }
}