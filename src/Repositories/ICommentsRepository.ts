import { Comment } from '../Entities/Comment'

export interface ICommentsRepository {
  save(comment: Comment): Promise<void>
  findAll(): Promise<Comment[]>
}
