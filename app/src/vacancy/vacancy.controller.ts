import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Query,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { Roles } from '../common/decorator/role.decorator';
import { Public } from '../common/decorator/public.decorator';

@Controller('vacancies')
export class VacanciesController {
  constructor(private readonly service: VacancyService) {}

  @Post()
  @Roles('ADMIN', 'GESTOR')
  create(@Body() dto: CreateVacancyDto) {
    return this.service.create(dto);
  }

  @Public()
  @Get()
  findAll(@Query('includeInactive') includeInactive?: string) {
    return this.service.findAll(includeInactive === 'true');
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Roles('ADMIN', 'USER', 'GESTOR')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateVacancyDto) {
    return this.service.update(id, dto);
  }

  @Patch(':id/toggle-active')
  @Roles('ADMIN', 'USER')
  toggleActive(@Param('id') id: string) {
    return this.service.toggleActive(id);
  }
}
