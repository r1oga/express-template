import { LogMiddleware } from './LogMiddleware'
import { SecurityMiddleware } from './SecurityMiddleware'
import { SecurityHstsMiddleware } from './SecurityHstsMiddleware'

export const middlewares = [
  SecurityMiddleware,
  SecurityHstsMiddleware,
  LogMiddleware,
]
