import { Inject, Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(@Inject('Connection') public connection: Connection) {}

  async getRepository<T>(entity: string): Promise<Repository<T>> {
    return this.connection.getRepository(entity);
  }
}
