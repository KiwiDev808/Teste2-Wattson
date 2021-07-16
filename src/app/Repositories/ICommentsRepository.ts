import { Comment } from '../Entities/Comment'

export interface ICommentsRepository {
  save(comment: Comment): Promise<void>
  getAll(): Promise<Comment[]>
  findById(id: string): Promise<Comment>
  delete(id: string): Promise<void>
}
