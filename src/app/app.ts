import cors from 'cors'
import express, { Request, Response } from 'express'
import { createCommentController } from './useCases/CreateComment'
import { deleteCommentController } from './useCases/DeleteComment'
import { getCommentsController } from './useCases/GetComments'

const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static('build'))

app.use('/static', express.static(process.cwd() + '/static'))

app.get('/api', (req: Request, res: Response) => {
  return res.send({ message: 'Teste' })
})

app.get('/api/comment', (req: Request, res: Response) => {
  return getCommentsController.handle(req, res)
})

app.post('/api/comment', (req: Request, res: Response) => {
  return createCommentController.handle(req, res)
})

app.delete('/api/comment/:id', (req: Request, res: Response) => {
  return deleteCommentController.handle(req, res)
})

export { app }
