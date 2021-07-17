import request from 'supertest'
import { app } from '../../src/app/app'
import { Comment } from '../../src/app/Entities/Comment'
import { getAll, insertInTable, truncate } from '../utils/helper'
import { commentsMock } from '../utils/mock'

describe('Get Comments', () => {
  beforeEach(async () => {
    await truncate('test2_watson_comments')
    await insertInTable('test2_watson_comments', commentsMock)
  })

  afterEach(async () => {
    await truncate('test2_watson_comments')
  })

  it('should delete a note and return status code 204 if id is valid', async () => {
    const initialComments = await getAll('test2_watson_comments')
    const commentToDelete = initialComments[0]

    await request(app).delete(`/api/comment/${commentToDelete.id}`).expect(204)

    const finalComments = await getAll('test2_watson_comments')

    expect(finalComments.length).toBe(initialComments.length - 1)

    const contents = finalComments.map((r: Comment) => r.description)

    expect(contents).not.toContain(commentToDelete.description)
  })

  it('should return status code 400 if id is invalid', async () => {
    await request(app).delete(`/api/comment/01001`).expect(400)
  })
})
