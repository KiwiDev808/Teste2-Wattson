import { Comment } from '../../Entities/Comment'
import { ICommentsRepository } from '../ICommentsRepository'
import { BaseRepository } from './BaseRepository'

export class MysqlCommentsRepository
  extends BaseRepository
  implements ICommentsRepository
{
  private connection = BaseRepository.connection()
  private commentsTable = () => this.connection('teste2_watson_comments')
  constructor() {
    super()
  }

  async findAll(): Promise<Comment[]> {
    const result: Comment[] = await this.commentsTable()
    return result
  }

  async save(comment: Comment): Promise<void> {
    await this.commentsTable().insert(comment)
  }
}
