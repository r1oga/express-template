# Typescript Project - Template

| Feature                               | With                                                                                                                                | Configuration File                           |
|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| Typed                                 | [typescript](https://www.typescriptlang.org/)                                                                                       | [tsconfig.json](./tsconfig.json)             |
| Formatting                            | [prettier](https://prettier.io/)                                                                                                    | [.prettierrc.js](./.prettierrc.js)           |
| Linting                               | [eslint](https://eslint.org/)                                                                                                       | [.eslintrc.cjs](./.eslintrc.cjs)             |
| Scripts                               | [nps](https://github.com/sezna/nps)                                                                                                 | [package-scripts.yml](./package-scripts.yml) |
| Pre-commit hook (formatting, linting) | [husky](https://typicode.github.io/husky/#/)                                                                                        |                                              |
| Reloading                             | [nodemon](https://nodemon.io/)                                                                                                      | [nodemon.json](./nodemon.json)               |
| Validation                            | [class-validator](https://github.com/typestack/class-validator)                                                                     |                                              |
| Basic Security Features               | [helmet](https://helmetjs.github.io/)                                                                                               |                                              |
| Logging                               | [winston](https://github.com/winstonjs/winston), [morgan](https://github.com/expressjs/morgan)                                      |                                              |
| Testing                               | [jest](https://jestjs.io/), [ts-jest](https://kulshekhar.github.io/ts-jest/), [supertest](https://github.com/visionmedia/supertest) | [jest.config.ts](./jest.config.ts)           |

## Getting Started
1. Use template: `gh create --template r1oga/express-template --public [repo-name]`
2. Clone: `gh repo clone [repo-name]`
3. Install dependencies: `yarn`
4. Husky init: `npx husky-init`
5. Check scripts: `nps help`
