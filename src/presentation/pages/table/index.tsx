import React, { useState } from "react"
import { GetMarket } from "../../../domain/usecases/get-market"
import useFetch from "../../hooks/useFetch"
import { Market } from "../../../domain/models/market"
import StyledTable from "./StyledTable";

type Props = {
  remote: GetMarket
}

const MarketsPage: React.FC<Props> = ({ remote }) => {
  const [markets, setMarkets] = useState<Market[] | []>([])

  useFetch(remote, data => {
    // TODO: decouple this logic
    const {
        account_name,
        amount,
        credit_card_cvv,
        credit_card_issuer,
        credit_card_number,
        currency_name,
        transaction_description,
        transaction_type
      } = data
      const market: Market = {
        accountName: account_name,
        amount: amount,
        creditCardCCV: credit_card_cvv,
        creditCardIssuer: credit_card_issuer,
        creditCardNumber: credit_card_number,
        currencyName: currency_name,
        transactionDescription: transaction_description,
        trasactionType: transaction_type
      }

      setMarkets(prev => [...prev, market])
    }
  )
  
  console.log(markets)

  return (
    <div>
      <StyledTable markets={markets} />
    </div>
  )
}

export default MarketsPage
