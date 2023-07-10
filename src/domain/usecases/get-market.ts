import { Market } from "../models/market"

export interface GetMarket {
  get(callback: (e: any) => any): Promise<Market>
  disconnect(): any
  filter(params: GetMarket.FilterParams): Market
}

export namespace GetMarket  {
  export type FilterParams = {
    terms: string
    data: Market[]
  }
}