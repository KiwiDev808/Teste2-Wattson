import request from 'supertest'
import { app } from '../../src/app/app'
import { Comment } from '../../src/app/Entities/Comment'
import { insertInTable, truncate } from '../utils/helper'
import { commentsMock } from '../utils/mock'

describe('Get Comments', () => {
  beforeEach(async () => {
    await truncate('test2_watson_comments')
    await insertInTable('test2_watson_comments', commentsMock)
  })

  afterAll(async () => {
    await truncate('test2_watson_comments')
  })

  it('should return all comments', async () => {
    const response = await request(app).get('/api/comment')

    expect(response.body.comments.length).toBe(3)
    expect(response.status).toBe(200)
  })

  it('should return a specific comment within the returned comments', async () => {
    const response = await request(app).get('/api/comment')

    const contents = response.body.comments.map((r: Comment) => r.description)
    expect(contents).toContain('mock_description_001')
  })
})
