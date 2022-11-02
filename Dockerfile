FROM node:19-alpine

RUN npm i -g pnpm

WORKDIR app

COPY .npmrc package.json pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile

COPY .env .
COPY prisma/migrations .
COPY prisma/schema.prisma .
RUN pnpm exec prisma migrate dev --name init

COPY tsconfig.json .
COPY package-scripts.yaml .
COPY src src

EXPOSE 3000

CMD ["npm", "run" ,"nps", "start.dev"]