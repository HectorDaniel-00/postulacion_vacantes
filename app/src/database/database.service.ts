import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private readonly logger = new Logger(DatabaseService.name);

  constructor(@InjectDataSource() private dataSource: DataSource) {}

  async onModuleInit() {
    try {
      await this.dataSource.query('SELECT 1');
      this.logger.log('Database connection established successfully.');
    } catch (err) {
      if (err instanceof Error) {
        this.logger.error('Database connection failed:', err.message);
        process.exit(1);
      } else {
        this.logger.error(' Database connection failed:', err);
      }
      throw err;
    }
  }
}
