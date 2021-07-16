import { Comment } from '../../Entities/Comment'

export interface IGetCommentsResponseDTO {
  message: string
  comments: Comment[]
}
