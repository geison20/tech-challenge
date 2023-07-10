import { User } from "../models/user"

export interface GetUser {
  get(callback: (e: any) => any): Promise<User>
  disconnect(): any
}