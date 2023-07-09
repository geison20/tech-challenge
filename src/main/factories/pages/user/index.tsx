import React, { useEffect } from "react"
import { RemoteGetClient } from "../../../../data/usecases/remote-get-client"
import { SocketIOClient } from "../../../../infra/socket/socket-io-client"

export const UserFactory = () => {
  const socketIOClient = new SocketIOClient()
  const remoteGetClient = new RemoteGetClient(socketIOClient)

  useEffect(() => {
    remoteGetClient.get(data => console.log(data))
    return () => remoteGetClient.disconnect()
  }, [])


  return <div>USerFactory</div>
}