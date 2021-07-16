import { ICommentsRepository } from '../../Repositories/ICommentsRepository'
import { IGetCommentsResponseDTO } from './GetCommentsDTO'

export class GetCommentsUseCase {
  constructor(private commentsRepository: ICommentsRepository) {}
  async execute(): Promise<IGetCommentsResponseDTO> {
    const comments = await this.commentsRepository.getAll()

    return { message: 'Success', comments }
  }
}
