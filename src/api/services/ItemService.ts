import { Service } from 'typedi'

import { Item } from '@prisma/client'
import { Logger, LoggerInterface } from '@decorators/Logger'
import { ItemRepository } from '@repositories'

@Service()
export class ItemService {
  constructor(
    private repository: ItemRepository,
    @Logger() private logger: LoggerInterface,
  ) {}

  async findAll() {
    return this.repository.findAll().then((items) => {
      this.logger.info('Find all items')
      return items
    })
  }

  async findOne(id: number) {
    return this.repository.findOne(id).then((item) => {
      this.logger.info('Find one item')
      return item
    })
  }

  async save(item: Item) {
    return this.repository.create(item).then((createdItem) => {
      this.logger.info(`Item ${item.id} ${item.name} has been saved`)
      return createdItem
    })
  }

  async update({ id, name }: Item) {
    return this.repository.update({ id, name }).then((updatedItem) => {
      this.logger.info(`Update item ${id} with new name ${name}`)
      return updatedItem
    })
  }

  async delete(id: number) {
    return this.repository.delete(id).then((deletedItem) => {
      this.logger.info(`Delete user ${id}`)
      return deletedItem
    })
  }
}
