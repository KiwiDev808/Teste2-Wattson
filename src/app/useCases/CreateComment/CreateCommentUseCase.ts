import fs from 'fs'
import path from 'path'
import { Comment } from '../../Entities/Comment'
import { Synthesizer } from '../../Entities/Synthesizer'
import { ICommentsRepository } from '../../Repositories/ICommentsRepository'
import { IdGenerator } from '../../services/idGenerator'
import {
  ICreateCommentRequestDTO,
  ICreateCommentResponseDTO,
} from './CreateCommentDTO'

export class CreateCommentUseCase {
  constructor(
    private commentsRepository: ICommentsRepository,
    private textSynthesizer: Synthesizer,
    private idGenerator: IdGenerator
  ) {}
  async execute(
    data: ICreateCommentRequestDTO
  ): Promise<ICreateCommentResponseDTO> {
    const audioBuffer = await this.textSynthesizer.synthesize(data.description)
    const commentId = this.idGenerator.generate()
    const fileName = `${Date.now()}-${commentId}.wav`

    fs.writeFileSync(
      path.join(process.cwd(), '/static/') + fileName,
      audioBuffer
    )

    const comment = new Comment(
      {
        audio: `${data.baseUrl}/static/${fileName}`,
        description: data.description,
        filename: fileName,
      },
      commentId
    )

    await this.commentsRepository.save(comment)

    return { message: 'Success' }
  }
}
