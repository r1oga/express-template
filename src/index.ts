import 'reflect-metadata'
import { Container } from 'typedi'
import { useContainer } from 'routing-controllers'

import { app } from './app'

// Setup routing-controllers to use typedi container.
useContainer(Container)

app.listen(3000)

console.log('Server 👂 on port 3000')
