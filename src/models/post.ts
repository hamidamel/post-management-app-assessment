import { IUser } from "./user"

export interface IPost{
    userId: number,
    id: number,
    title: string,
    body: string
  }

  export interface IFullPost{
    userId: number,
    id: number,
    title: string,
    body: string,
    user?: IUser
  }