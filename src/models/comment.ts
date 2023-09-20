import { IUser } from "./user"

export interface IComment {
  postId: number,
  id: number,
  name: string,
  body: string,
  email: string
}

export interface IFullComment {
  postId: number,
  id: number,
  title: string,
  body: string,
  email: string
  user?: IUser
}