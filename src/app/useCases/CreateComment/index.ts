import { MySqlCommentsRepository } from '../../../repositories/implementations/MySqlCommentsRepository'
import { CreateCommentController } from './CreateCommentController'
import { CommentPostUseCase } from './CreateCommentUseCase'
import { CommentPostValidator } from './CreateCommentValidator'

const mysqlCommentsRepository = new MySqlCommentsRepository()
const commentPostValidator = new CommentPostValidator()

const CommentPostsUseCase = new CommentPostUseCase(
  mysqlCommentsRepository,
  commentPostValidator
)

const commentPostController = new CreateCommentController(CommentPostsUseCase)

export { CommentPostsUseCase, commentPostController }
