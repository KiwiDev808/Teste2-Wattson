import request from 'supertest'
import { app } from '../../src/app/app'
import { truncate } from '../utils/truncate'

describe('Create Comment', () => {
  beforeEach(async () => {
    await truncate('test2_watson_comments')
  })

  it('should create comment with valid description', async () => {
    const response = await request(app).post('/api/comment').send({
      description: 'Olá mundo',
    })

    expect(response.status).toBe(201)
  })
})
