## Description

Application which is created on [Nest](https://github.com/nestjs/nest) framework for SpreadIT cms api purpose.

## Requirements

- docker
- npm

## Installation

Copy file `.env.dist`, create `.env` and set variables

```bash
$ cp .dist.env .env
```

For development purposes copy `docker-compose.override.yml.dist` to `docker-compose.override.yml`

```bash
$ cp docker-compose.override.yml.dist docker-compose.override.yml
```

Build application image

```bash
$ npm run docker-build
```

To synchronize node_modules folder from docker container to host, you need to perform npm install from inside the container, while having the docker-compose.override.yml present:

```bash
$ npm run shell
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

## Documentation

Code documentation:

```bash
$ npm run docs
```
