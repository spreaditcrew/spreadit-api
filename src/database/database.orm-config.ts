import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function getOrmConfig() {
  let ormConfig: TypeOrmModuleOptions;
  const envConfig = dotenv.config().parsed;
  const settings = {
    username: envConfig.POSTGRES_USER,
    password: envConfig.POSTGRES_PASSWORD,
    database: envConfig.POSTGRES_DB,
    host: envConfig.POSTGRES_HOST,
  };

  if (process.env.NODE_ENV !== 'test') {
    ormConfig = {
      type: 'postgres',
      host: settings.host,
      port: 5432,
      username: settings.username,
      password: settings.password,
      database: settings.database,
      entities: ['src/**/**.entity{.ts,.js}'],
      synchronize: true,
    };
  } else {
    ormConfig = {
      type: 'postgres',
      host: 'db-e2e',
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'test',
      entities: ['src/**/**.entity{.ts,.js}'],
      synchronize: true,
    };
  }
  return ormConfig;
}
