# Express Project - Template

| Feature                               | With                                                                                                                                | Configuration File                                                       |
|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| Typed                                 | [typescript](https://www.typescriptlang.org/)                                                                                       | [tsconfig.json](./tsconfig.json)                                         |
| Formatting                            | [prettier](https://prettier.io/)                                                                                                    | [.prettierrc.yaml](./.prettierrc.yaml)                                   |
| Linting                               | [eslint](https://eslint.org/)                                                                                                       | [.eslintrc.yaml](./.eslintrc.yaml)                                       |
| Scripts                               | [nps](https://github.com/sezna/nps)                                                                                                 | [package-scripts.yaml](./package-scripts.yaml)                           |
| Pre-commit hook (formatting, linting) | [husky](https://typicode.github.io/husky/#/)                                                                                        |                                                                          |
| Reloading                             | [ts-node-dev](https://github.com/wclr/ts-node-dev)                                                                                  |                                                                          |
| Validation                            | [class-validator](https://github.com/typestack/class-validator)                                                                     |                                                                          |
| Basic Security Features               | [helmet](https://helmetjs.github.io/)                                                                                               |                                                                          |
| ORM                                   | [prisma](https://www.prisma.io/)                                                                                                    | [schema.prisma](./prisma/schema.prisma)                                  |
| Logging                               | [winston](https://github.com/winstonjs/winston), [morgan](https://github.com/expressjs/morgan)                                      |                                                                          |
| Testing                               | [jest](https://jestjs.io/), [ts-jest](https://kulshekhar.github.io/ts-jest/), [supertest](https://github.com/visionmedia/supertest) | [jest.config.ts](./jest.config.ts)                                       |
| Containerization                      | [docker](https://www.docker.com/)                                                                                                   | [Dockerfile](./Dockerfile), [docker-compose.yaml](./docker-compose.yaml) |

## Getting Started
1. Use template: `gh create --template r1oga/express-template --public [repo-name]`
2. Clone: `gh repo clone [repo-name]`
3, Define `DATABASE_URL` in an `.env` file: e.g `echo 'DATABASE_URL="file:./dev.db"' > .env`
3. Start
    1. **Docker: `docker compose up`**
    2. Node/npm
       1. Install pnpm: `npm i -g pnpm` 
       2. Install dependencies: `pnpm i`
       3. Husky init: `pnpm exec husky-init`
       4. Create database and run migration: `pnpm exec prisma migrate dev --name init`
       5. Start: `pnpm start.dev`
4. App is running at `http://localhost:3000`
