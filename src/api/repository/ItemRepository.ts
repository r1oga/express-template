import { Service } from 'typedi'
import { Item } from '../models/Item'

@Service()
export class ItemRepository {
  // fake DB
  private items = [
    new Item(1, 'item #1'),
    new Item(2, 'item #2'),
    new Item(3, 'item #3')
  ]

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

  save(post: Item) {
    this.items.push(post)
    return post
  }

  remove(id: number) {
    const post = this.findOne(id)
    if (post) this.items.splice(this.items.indexOf(post), 1)
    return post
  }
}
