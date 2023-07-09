export interface SocketClient {
  on(params: SocketClient.Params): any
  disconnect()
}

export namespace SocketClient  {
  export type Params = {
    type: string
    callback: (data: any) => any
  }
}