import React, { useRef } from "react"
import { RemoteGetUser } from "../../../../data/usecases/remote-get-user"
import { SocketIOClient } from "../../../../infra/socket/socket-io-client"
import UserPage from "../../../../presentation/pages/user"

export const UserFactory = () => {
  const socketIOClient = useRef(new SocketIOClient())
  const remoteGetClient = new RemoteGetUser(socketIOClient.current)
  
  return <UserPage remote={remoteGetClient}/>
}