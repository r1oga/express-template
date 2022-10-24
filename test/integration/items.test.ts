import request from 'supertest'
import { Application } from 'express'
import { Container } from 'typedi'

import { bootstrap } from '~/bootstrap'

describe('/items', () => {
  let app: Application | null

  beforeEach(async () => {
    app = bootstrap()
  })

  afterEach(() => {
    app = null
    Container.reset()
  })
  it('GET: / returns all items', async () => {
    const { body } = await request(app)
      .get('/items')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(body).toHaveLength(4)
  })
})
