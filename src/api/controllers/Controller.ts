import {
  JsonController,
  Get,
  Post,
  Param,
  Delete,
  Body,
} from 'routing-controllers'
import { Service } from 'typedi'

import { Item } from '@prisma/client'
import { ItemService } from '@services'

@Service()
@JsonController()
export class Controller {
  constructor(private service: ItemService) {}

  @Get('/items')
  async all() {
    return this.service.findAll()
  }

  @Get('/items/:id')
  async one(@Param('id') id: number) {
    return this.service.findOne(id)
  }

  @Post('/items')
  async create(@Body({ required: true }) item: Item) {
    return this.service.save(item)
  }

  @Delete('/items/:id')
  async delete(@Param('id') id: number) {
    return this.service.delete(id)
  }
}
