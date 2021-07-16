import { MysqlCommentsRepository } from '../../Repositories/Implementations/MysqlComentsRepository'
import { DeleteCommentController } from './DeleteCommentController'
import { DeleteCommentUseCase } from './DeleteCommentUseCase'

const mysqlCommentsRepository = new MysqlCommentsRepository()

const deleteCommentUseCase = new DeleteCommentUseCase(mysqlCommentsRepository)

const deleteCommentController = new DeleteCommentController(
  deleteCommentUseCase
)

export { deleteCommentUseCase, deleteCommentController }
