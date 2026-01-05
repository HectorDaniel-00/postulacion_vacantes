import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Message } from 'src/common/decorator';

@Controller('role')
export class RoleController {
  constructor(private readonly service: RoleService) {}

  @Message('Rol creado con exito')
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.service.create(dto);
  }

  @Message('Rol encontrado exitosamente')
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Message('Rol encontrado exitosamente')
  @Get('name')
  findOne(@Body() name: string) {
    return this.service.findByName(name);
  }

  @Message('Rol eliminado con exito')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(+id);
  }
}
