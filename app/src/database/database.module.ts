import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { DatabaseService } from './database.service';
import typeOrmConfig from 'src/config/typeOrm.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [ConfigService],
      useFactory: typeOrmConfig,
    }),
  ],
  providers: [DatabaseService],
})
export class DatabaseModule {}
