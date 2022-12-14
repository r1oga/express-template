import { Item } from '@prisma/client'
import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Post,
  Put,
} from 'routing-controllers'
import { Service } from 'typedi'

import { ItemService } from '@services'

@Service()
@JsonController()
export class Controller {
  constructor(readonly service: ItemService) {}

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

  @Put('/items/:id')
  async update(
    @Param('id') id: number,
    @Body({ required: true }) name: string,
  ) {
    return this.service.update({ id, name })
  }
}
