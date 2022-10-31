import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime'
import * as express from 'express'
import {
  ExpressErrorMiddlewareInterface,
  HttpError,
  Middleware,
} from 'routing-controllers'

import { Logger, LoggerInterface } from '@decorators/Logger'
import { Service } from 'typedi'

@Service()
@Middleware({ type: 'after' })
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
  constructor(@Logger() private logger: LoggerInterface) {}

  public error(
    error:
      | HttpError
      | PrismaClientValidationError
      | PrismaClientKnownRequestError,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): void {
    this.logger.error(
      error instanceof PrismaClientValidationError ||
        error instanceof PrismaClientKnownRequestError
        ? error.constructor.name
        : error.name,
      error,
    )
  }
}
