import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationService } from './application.service';
import { ApplicationController } from './application.controller';
import { ApplicationEntity } from './entities/application.entity';
import { ApplicationRepository } from './entities/application.repository';
import { UserModule } from '../user/user.module';
import { VacancyModule } from '../vacancy/vacancy.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ApplicationEntity]),
    UserModule,
    VacancyModule,
  ],
  controllers: [ApplicationController],
  providers: [ApplicationService, ApplicationRepository],
  exports: [ApplicationRepository, ApplicationService],
})
export class ApplicationModule {}
