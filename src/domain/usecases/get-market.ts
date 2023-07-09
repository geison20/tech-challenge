import { Market } from "../models/market"

export interface GetMarket {
  get(): Promise<Market>
  filter(params: GetMarket.Params): Market
}

export namespace GetMarket  {
  export type Params = {
    terms: string
    data: Market[]
  }
}