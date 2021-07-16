import { Request, Response } from 'express'
import { DeleteCommentUseCase } from './DeleteCommentUseCase'

export class DeleteCommentController {
  constructor(private deleteCommentUseCase: DeleteCommentUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const id = req.params.id

    try {
      const response = await this.deleteCommentUseCase.execute({ id })

      return res.status(204).send(response)
    } catch (err) {
      res.status(400).send({ message: err.message })
    }
  }
}
