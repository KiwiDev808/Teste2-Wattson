import request from 'supertest'
import { app } from '../../src/app/app'
import { deleteStaticFiles } from '../utils/deleteStaticFiles'
import { truncate } from '../utils/truncate'

describe('Create Comment', () => {
  beforeEach(async () => {
    await truncate('test2_watson_comments')
    deleteStaticFiles()
  })

  afterAll(async () => {
    await truncate('test2_watson_comments')
    deleteStaticFiles()
  })

  it('should create comment with valid description', async () => {
    const response = await request(app).post('/api/comment').send({
      description: 'Olá mundo',
    })

    expect(response.status).toBe(201)
  })

  it('should not create comment with empty description', async () => {
    const response = await request(app).post('/api/comment').send({
      description: '',
    })

    expect(response.status).toBe(406)
  })

  it('should not create comment with invalid description', async () => {
    const response = await request(app).post('/api/comment').send({
      description: 123,
    })

    expect(response.status).toBe(406)
  })

  it('should return a success message after creating a comment', async () => {
    const response = await request(app).post('/api/comment').send({
      description: 'Olá mundo',
    })

    expect(response.body.message).toBe('Success')
  })
})
