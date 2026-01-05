import { Module } from '@nestjs/common';
import { TecnologiesService } from './tecnologies.service';
import { TecnologiesController } from './tecnologies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TecnologyEntity } from './entities/tecnology.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TecnologyEntity])],
  controllers: [TecnologiesController],
  providers: [TecnologiesService],
})
export class TecnologiesModule {}
