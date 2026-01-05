import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { Roles } from '../common/decorator/role.decorator';
import { Public } from '../common/decorator/public.decorator';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Vacancies')
@Controller('vacancies')
export class VacancyController {
  constructor(private readonly service: VacancyService) {}

  @ApiOperation({ summary: 'Crear una nueva vacante' })
  @ApiResponse({ status: 201, description: 'Vacante creada exitosamente.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Post()
  @Roles('ADMIN', 'GESTOR')
  create(@Body() dto: CreateVacancyDto) {
    return this.service.create(dto);
  }

  @ApiOperation({ summary: 'Obtener todas las vacantes' })
  @ApiResponse({ status: 200, description: 'Lista de vacantes.' })
  @Public()
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @ApiOperation({ summary: 'Obtener una vacante por ID' })
  @ApiResponse({ status: 200, description: 'Detalles de la vacante.' })
  @ApiResponse({ status: 404, description: 'Vacante no encontrada.' })
  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @ApiOperation({ summary: 'Actualizar una vacante' })
  @ApiResponse({
    status: 200,
    description: 'Vacante actualizada exitosamente.',
  })
  @ApiResponse({ status: 404, description: 'Vacante no encontrada.' })
  @Patch(':id')
  @Roles('ADMIN', 'GESTOR')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateVacancyDto) {
    return this.service.update(id, dto);
  }

  @ApiOperation({ summary: 'Activar o desactivar una vacante' })
  @ApiResponse({
    status: 200,
    description: 'Estado de la vacante actualizado.',
  })
  @ApiResponse({ status: 404, description: 'Vacante no encontrada.' })
  @Get('active')
  @Roles('ADMIN', 'USER')
  toggleActive(@Param('id', ParseIntPipe) id: number) {
    return this.service.toggleActive(id);
  }
}
