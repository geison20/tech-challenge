export interface SocketClient {
  on(params: SocketClient.Params): any
  disconnect(): any
}

export namespace SocketClient  {
  export type Params = {
    type: string
    callback: (data: any) => any
  }
}