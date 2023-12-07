# Project Name

This project is a Nest.js application that handles user authentication through login and registration processes.

## Getting Started

To install project dependencies, use the following command:

## Database Configuration
```bash
# DATABASE_URL="postgresql://postgres:DB_PASSWORD@localhost:5432/DB_NAME?schema=public"
```

## Prisma Usage
```bash
# generator client {
#   provider = "prisma-client-js"
# }

# datasource db {
#   provider = "postgresql"
#   url      = env("DATABASE_URL")
# }

# model User {
#   id             Int      @default(autoincrement()) @id
#   email          String   @unique
#   hashedPassword String?
#   createdAt      DateTime @default(now())
#   updatedAt      DateTime @updatedAt()
# }
```

## Environment Variables
```bash
# JWT_SECRET="mysecret"
# CLIENT_URL="http://localhost:3000"
```

# Feel free to customize this template according to your project's specifics and add more details as needed.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```