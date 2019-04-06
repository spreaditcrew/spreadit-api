import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { getOrmConfig } from './database.orm-config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(getOrmConfig())],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
