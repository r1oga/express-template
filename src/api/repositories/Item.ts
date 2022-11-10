import { Item } from '@prisma/client'
import { Service } from 'typedi'

import { Db } from '../../db'

@Service()
export class ItemRepository {
  constructor(readonly db: Db) {}

  create(item: Item) {
    return this.db.item.create({ data: item })
  }

  update({ id, name }: Item) {
    return this.db.item.update({ where: { id }, data: { name } })
  }

  findAll() {
    return this.db.item.findMany()
  }

  findOne(id: number) {
    return this.db.item.findUnique({ where: { id } })
  }

  delete(id: number) {
    return this.db.item.delete({ where: { id } })
  }
}
