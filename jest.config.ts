import type { JestConfigWithTsJest } from 'ts-jest'
import { pathsToModuleNameMapper } from 'ts-jest'

import { compilerOptions } from './tsconfig.json'

const jestConfig: JestConfigWithTsJest = {
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./test/setup.ts'],
  verbose: true,
}

export default jestConfig
