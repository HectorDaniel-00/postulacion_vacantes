import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTecnologyDto } from './dto/create-tecnology.dto';
import { UpdateTecnologyDto } from './dto/update-tecnology.dto';
import { TecnologiesRepository } from './entities/tecnology.repository';
import { UpdateApplicationDto } from 'src/application/dto/update-application.dto';

@Injectable()
export class TecnologiesService {
  constructor(private readonly repo: TecnologiesRepository) {}
  async create(dto: CreateTecnologyDto) {
    const tecno = await this.repo.findByName(dto.name);
    if (tecno) {
      throw new ConflictException(
        `El nombre de la tecnologia ${tecno.name} ya existe `,
      );
    }
    const newTecno = {
      name: dto.name,
      description: dto.description,
    };
    return await this.repo.create(newTecno);
  }

  async findAll() {
    const tecno = await this.repo.findAll();
    if (tecno!.length <= 0) {
      throw new NotFoundException('Lista de tecnologia vacia');
    }
    return tecno!.map((tecno) => ({
      id: tecno.id,
      name: tecno.name,
      description: tecno.description,
    }));
  }

  async findOne(id: number) {
    if (!id) {
      throw new BadRequestException('El campo no puede ir vacio');
    }

    const tecno = await this.repo.findOne(id);
    if (!tecno) {
      throw new NotFoundException('La tecnologia no existe');
    }
  }

  async findByName(name: string) {
    if (!name) {
      throw new BadRequestException(
        'El campo requerido esta incompleto o incorrecto',
      );
    }

    const user = await this.repo.findByName(name);
    if (!user) {
      throw new NotFoundException(
        `Error la tecnologia con el nombre: ${name} no existe`,
      );
    }
    return user;
  }

  async update(id: number, data: UpdateTecnologyDto) {
    if (!id) {
      throw new BadRequestException(
        'El campo requerido (id) esta incompleto, por favor verifique e intente nuevamente',
      );
    }
    const user = await this.repo.findOne(id);
    if (!user) {
      throw new NotFoundException(
        `El usuario con el id ${id} no existe, por favor cambie el dato ingresado y vuelta a intentarlo`,
      );
    }
    const updateUser = {
      name: data.name ?? user.name,
      description: data.description ?? user.description,
    };
    return await this.repo.update(id, data);
  }

  async remove(id: number) {
    if (!id) {
      throw new BadRequestException('Campo requerido esta vacio');
    }
    const user = await this.repo.findOne(id);
    if (!user) {
      throw new NotFoundException(
        `La tecnologia con el id ${id} no existe, cambia el valor y vuelve a intentarlo`,
      );
    }
    return user;
  }
}
