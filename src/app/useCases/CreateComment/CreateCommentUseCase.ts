import fs from 'fs'
import path from 'path'
import { Comment } from '../../Entities/Comment'
import { Synthesizer } from '../../Entities/Synthetizer'
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
    const fileName = `${Date.now()}.wav`
    const audioBuffer = await this.textSynthesizer.synthesize(data.description)
    fs.writeFileSync(
      path.join(process.cwd(), '/static/') + fileName,
      audioBuffer
    )

    const commentId = this.idGenerator.generate()

    const comment = new Comment(
      {
        audio: `${data.baseUrl}/static/${fileName}`,
        description: data.description,
      },
      commentId
    )

    await this.commentsRepository.save(comment)

    return { message: 'Success' }
  }
}
