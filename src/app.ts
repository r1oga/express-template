import { createExpressServer } from 'routing-controllers'

import { controllers } from '@controllers'

export const app = createExpressServer({
  controllers,
})
