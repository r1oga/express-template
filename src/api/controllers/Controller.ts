import {
  JsonController,
  Get,
  Post,
  Param,
  Delete,
  Body,
} from 'routing-controllers'
import { Service } from 'typedi'

import { ItemRepository } from '@repository'
import { Item } from '@models'

@Service()
@JsonController()
export class Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor(private itemRepository: ItemRepository) {}

  @Get('/items')
  all(): Promise<Item[]> {
    return this.itemRepository.findAll()
  }

  @Get('/items/:id')
  one(@Param('id') id: number) {
    return this.itemRepository.findOne(id)
  }

  @Post('/items')
  create(@Body({ required: true }) item: Item): Item {
    return this.itemRepository.save(item)
  }

  @Delete('/items/:id')
  delete(@Param('id') id: number) {
    return this.itemRepository.remove(id)
  }
}
