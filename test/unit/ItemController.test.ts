import { Item } from '@prisma/client'

import { Controller } from '@controllers/Controller'
import { ItemRepository } from '@repositories'
import { ItemService } from '@services'
import { createMockContext, DbMock } from './lib/RepositoryMock'
import { logger } from '~/logger'

describe('ItemsController', () => {
  let dbMock: DbMock
  let itemController: Controller

  beforeEach(() => {
    dbMock = createMockContext()
    itemController = new Controller(
      new ItemService(new ItemRepository(dbMock), logger),
    )
  })

  it('Creates 1 user', async () => {
        const item: Item = { id: 1, name: 'foo' }
    dbMock.item.create.mockResolvedValue(item)
    await expect(itemController.create(item)).resolves.toMatchObject(item)
  })

  it('Returns 1 user', async () => {
    const item: Item = { id: 1, name: 'foo' }
    dbMock.item.findUnique.mockResolvedValue(item)
    await expect(itemController.one(1)).resolves.toMatchObject(item)
  })

  it('Returns all users', async () => {
    const items: Item[] = [{ id: 1, name: 'foo' }, {id:2, name: 'bar'}]
    dbMock.item.findMany.mockResolvedValue(items)
    await expect(itemController.all()).resolves.toMatchObject(items)
  })

  it('Updates 1 user', async () => {
    const newItem = {id:0, name:'foo'}
    dbMock.item.update.mockResolvedValue(newItem)
    await expect(itemController.update(newItem.id, newItem.name)).resolves.toMatchObject(newItem)
  })
})
