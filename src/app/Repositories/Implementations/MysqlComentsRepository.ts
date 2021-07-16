import { Comment } from '../../Entities/Comment'
import { ICommentsRepository } from '../ICommentsRepository'
import { BaseRepository } from './BaseRepository'

export class MysqlCommentsRepository
  extends BaseRepository
  implements ICommentsRepository
{
  private connection = BaseRepository.connection()
  private commentsTable = () => this.connection('test2_watson_comments')
  constructor() {
    super()
  }

  async getAll(): Promise<Comment[]> {
    const result: Comment[] = await this.commentsTable()
    return result
  }

  async findById(id: string): Promise<Comment> {
    const result: Comment[] = await this.commentsTable().where({ id })
    return result[0]
  }

  async save(comment: Comment): Promise<void> {
    await this.commentsTable().insert(comment)
  }

  async delete(id: string): Promise<void> {
    await this.commentsTable().delete().where({
      id,
    })
  }
}
