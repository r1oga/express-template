import { createExpressServer } from 'routing-controllers'

import { Controller } from '@controllers'

export const app = createExpressServer({
  controllers: [Controller],
})
