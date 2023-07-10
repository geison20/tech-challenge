import React, { useRef } from "react"
import { SocketIOClient } from "../../../../infra/socket/socket-io-client"
import { RemoteGetMarket } from "../../../../data/usecases/remote-get-market"
import MarketsPage from "../../../../presentation/pages/table"

export const MarketFactory = () => {
  const socketIOClient = useRef(new SocketIOClient())
  const remoteGetMarket = new RemoteGetMarket(socketIOClient.current)

  return <MarketsPage remote={remoteGetMarket}/>
}
