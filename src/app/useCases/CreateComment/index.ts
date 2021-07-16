import { textSynthesizer } from '../../Entities/Synthetizer'
import { MysqlCommentsRepository } from '../../Repositories/Implementations/MysqlComentsRepository'
import { IdGenerator } from '../../services/idGenerator'
import { CreateCommentController } from './CreateCommentController'
import { CreateCommentUseCase } from './CreateCommentUseCase'

const mysqlCommentsRepository = new MysqlCommentsRepository()
const idGenerator = new IdGenerator()

const createCommentUseCase = new CreateCommentUseCase(
  mysqlCommentsRepository,
  textSynthesizer,
  idGenerator
)

const createCommentController = new CreateCommentController(
  createCommentUseCase
)

export { createCommentUseCase, createCommentController }
