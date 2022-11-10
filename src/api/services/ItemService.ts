import { Service } from 'typedi'

import { Item } from '@prisma/client'
import { Logger, LoggerInterface } from '@decorators/Logger'
import { ItemRepository } from '@repositories'

@Service()
export class ItemService {
  constructor(
    readonly repository: ItemRepository,
    @Logger() readonly logger: LoggerInterface,
  ) {}

  async findAll() {
    return this.repository.findAll().then((items) => {
      this.logger.info('Found all items')
      return items
    })
  }

  async findOne(id: number) {
    return this.repository.findOne(id).then((item) => {
      this.logger.info(`Found item ${id}`)
      return item
    })
  }

  async save(item: Item) {
    return this.repository.create(item).then((createdItem) => {
      this.logger.info(`Saved item ${item.id}`)
      return createdItem
    })
  }

  async update({ id, name }: Item) {
    return this.repository.update({ id, name }).then((updatedItem) => {
      this.logger.info(`Updated item ${id}`)
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
