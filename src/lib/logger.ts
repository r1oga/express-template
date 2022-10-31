import { addColors, createLogger, format, transports } from 'winston'

const { colorize, combine, timestamp, printf } = format
const { Console, File } = transports

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
}

const level = process.env.NODE_ENV === 'development' ? 'debug' : 'warn'
const silent = process.env.NODE_ENV === 'test'

addColors(colors)

const logger = createLogger({
  level,
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
  },
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
  transports: [
    new Console({ format: colorize({ all: true }), silent }),
    new File({
      filename: 'logs/error.log',
      level: 'error',
    }),
    new File({ filename: 'logs/all.log' }),
  ],
})

export { logger }
