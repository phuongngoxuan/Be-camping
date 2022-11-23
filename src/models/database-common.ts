import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/models/repositories/users.repository';
import { HistoriesRepository } from './repositories/histories.repository';

const commonRepositories = [UserRepository, HistoriesRepository];

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature(commonRepositories, 'master'),
    TypeOrmModule.forFeature(commonRepositories, 'report'),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseCommonModule {}
