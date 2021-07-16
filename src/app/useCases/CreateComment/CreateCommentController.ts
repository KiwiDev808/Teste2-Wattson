import { Request, Response } from 'express'
import { CommentPostUseCase } from './CreateCommentUseCase'

export class CreateCommentController {
  constructor(private CreateCommentUseCase: CommentPostUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const { description } = req.body
    const baseUrl = `${req.protocol}://${req.get('host')}`

    try {
      const response = await this.CreateCommentUseCase.execute({
        description,
        baseUrl,
      })

      return res.status(201).send(response)
    } catch (err) {
      res.status(400).send({ message: err.message })
    }
  }
}
