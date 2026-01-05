import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TecnologiesService } from './tecnologies.service';
import { CreateTecnologyDto } from './dto/create-tecnology.dto';
import { UpdateTecnologyDto } from './dto/update-tecnology.dto';
import { Message, Roles } from 'src/common/decorator';
import { plainToInstance } from 'class-transformer';
import { ResponseTecnologyDto } from './dto/response-tecnology.dto';

@Controller('tecnologies')
export class TecnologiesController {
  constructor(private readonly service: TecnologiesService) {}

  @Message('Tecnologia creada con exito')
  @Post()
  @Roles('ADMIN')
  create(@Body() dto: CreateTecnologyDto) {
    const tecno = this.service.create(dto);
    return plainToInstance(ResponseTecnologyDto, tecno, {
      excludeExtraneousValues: true,
    });
  }

  @Get()
  findAll() {
    const tecno = this.service.findAll();
    return plainToInstance(ResponseTecnologyDto, tecno, {
      excludeExtraneousValues: true,
    });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const tecno = this.service.findOne(id);
    return plainToInstance(ResponseTecnologyDto, tecno, {
      excludeExtraneousValues: true,
    });
  }

  @Get('name')
  findByName(@Body() name: string) {
    const tecno = this.service.findByName(name);
    return plainToInstance(ResponseTecnologyDto, tecno, {
      excludeExtraneousValues: true,
    });
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTecnologyDto,
  ) {
    const tecno = this.service.update(id, dto);
    return plainToInstance(ResponseTecnologyDto, tecno, {
      excludeExtraneousValues: true,
    });
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    const tecno = this.service.remove(id);
    return plainToInstance(ResponseTecnologyDto, tecno, {
      excludeExtraneousValues: true,
    });
  }
}
