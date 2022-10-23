import { createExpressServer } from 'routing-controllers'

import { Controller } from './api/controllers'

export const app = createExpressServer({
  controllers: [Controller]
})
