export class RepositoryMock<T> {
  public one: T | undefined
  public list: T[] | undefined

  public findMock = jest.fn()
  public findOneMock = jest.fn()
  public saveMock = jest.fn()
  public deleteMock = jest.fn()

  public findOne(...args: any[]) {
    this.findMock(args)
    return Promise.resolve(this.one)
  }

  public findAll(...args: any[]) {
    this.findOneMock(args)
    return Promise.resolve(this.list)
  }

  public save(value: T, ...args: any[]) {
    this.saveMock(value, args)
    return Promise.resolve(value)
  }

  public delete(value: T, ...args: any[]) {
    this.deleteMock(value, args)
    return Promise.resolve(value)
  }
}
