import fs from 'fs'
import { ICommentsRepository } from '../../Repositories/ICommentsRepository'
import {
  ICreateCommentRequestDTO,
  ICreateCommentResponseDTO,
} from './DeleteCommentDTO'

export class DeleteCommentUseCase {
  constructor(private commentsRepository: ICommentsRepository) {}
  async execute(
    data: ICreateCommentRequestDTO
  ): Promise<ICreateCommentResponseDTO> {
    const dbComment = await this.commentsRepository.findById(data.id)
    if (!dbComment) {
      throw new Error('Comment not found')
    }

    fs.unlinkSync(`${process.cwd()}/static/${dbComment.filename}`)

    await this.commentsRepository.delete(dbComment.id)

    return { message: 'Success' }
  }
}
