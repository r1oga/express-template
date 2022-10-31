import { Item } from '@prisma/client'
import { Service } from 'typedi'

import { Db } from '../../db'

@Service()
export class ItemRepository {
  constructor(private db: Db) {}

  async create(item: Item) {
    return this.db.item.create({ data: item })
  }

  async update({ id, name }: Item) {
    return this.db.item.update({ where: { id }, data: { name } })
  }

  async findAll() {
    return this.db.item.findMany()
  }

  async findOne(id: number) {
    return this.db.item.findUnique({ where: { id } })
  }

  async delete(id: number) {
    return this.db.item.delete({ where: { id } })
  }
}
