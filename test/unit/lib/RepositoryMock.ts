import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

export type DbMock = DeepMockProxy<PrismaClient>

export const createMockContext = (): DbMock => mockDeep<PrismaClient>()

