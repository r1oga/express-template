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
    this.logger.info('Find all items')
    return this.repository.findAll()
  }

  async findOne(id: number) {
    this.logger.info('Find one item')
    return this.repository.findOne(id)
  }

  async save(item: Item) {
    this.logger.info(`Item ${item.id} ${item.name} has been saved`)
    return this.repository.create(item)
  }

  async update({ id, name }: Item) {
    this.logger.info(`Update item ${id} with new name ${name}`)
    return this.repository.update({ id, name })
  }

  async delete(id: number) {
    this.logger.info(`Delete user ${id}`)
    return this.repository.delete(id)
  }
}
