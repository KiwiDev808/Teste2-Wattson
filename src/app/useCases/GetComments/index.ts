import { MysqlCommentsRepository } from '../../Repositories/Implementations/MysqlComentsRepository'
import { GetCommentsController } from './GetCommentsController'
import { GetCommentsUseCase } from './GetCommentsUseCase'

const mysqlCommentsRepository = new MysqlCommentsRepository()

const getCommentsUseCase = new GetCommentsUseCase(mysqlCommentsRepository)

const getCommentsController = new GetCommentsController(getCommentsUseCase)

export { getCommentsUseCase, getCommentsController }
