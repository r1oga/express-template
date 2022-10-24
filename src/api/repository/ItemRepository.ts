import { Service } from 'typedi'

import { Item } from '@models'
import { Logger, LoggerInterface } from '@decorators/Logger'

@Service()
export class ItemRepository {
  // fake DB
  private items = [
    new Item(1, 'item #1'),
    new Item(2, 'item #2'),
    new Item(3, 'item #3'),
    new Item(3, 'item #4'),
  ]

  constructor(@Logger() private logger: LoggerInterface) {}

  findAll() {
    // simulate async by creating an empty promise
    return Promise.resolve(this.items)
  }

  findOne(id: number) {
    let foundItem: Item | undefined
    this.items.forEach((item) => {
      if (item.id === id) foundItem = item
    })
    return foundItem
  }

  save(item: Item) {
    this.items.push(item)
    this.logger.info(`item ${item.id} ${item.name} has been saved`)
    return item
  }

  delete(id: number) {
    const post = this.findOne(id)
    if (post) this.items.splice(this.items.indexOf(post), 1)
    return post
  }
}
