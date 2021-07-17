import { Request, Response } from 'express'
import { APIError } from '../../services/APIError'
import { DeleteCommentUseCase } from './DeleteCommentUseCase'

export class DeleteCommentController {
  constructor(private deleteCommentUseCase: DeleteCommentUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const id = req.params.id

    try {
      const response = await this.deleteCommentUseCase.execute({ id })

      return res.status(204).send(response)
    } catch (err) {
      if (err instanceof APIError) {
        return res.status(err.code).send({ message: err.message })
      }

      return res.status(400).send({ message: err.message })
    }
  }
}
