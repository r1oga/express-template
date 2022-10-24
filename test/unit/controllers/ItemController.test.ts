import { Controller } from '@controllers/Controller'
import { Item } from '@models'
import { RepositoryMock } from '../lib/RepositoryMock'

describe('ItemController', () => {
  it('Returns list of users', async () => {
    const repo = new RepositoryMock()
    const item = new Item(1, 'foo')

    repo.list = [item]

    const itemsController = new Controller(repo as any)
    const users = await itemsController.all()

    expect(users).toHaveLength(1)
    expect(users[0]).toMatchObject({ id: 1, name: 'foo' })
  })
})
