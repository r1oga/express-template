import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class Item {
  @IsNotEmpty()
  @IsNumber()
  public id: number

  @IsNotEmpty()
  @IsString()
  public name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}
