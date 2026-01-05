import { InjectRepository } from '@nestjs/typeorm';
import { TecnologyEntity } from './tecnology.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateTecnologyDto } from '../dto/create-tecnology.dto';
import { UpdateTecnologyDto } from '../dto/update-tecnology.dto';
import { DeleteResult } from 'typeorm/browser';

@Injectable()
export class TecnologiesRepository {
  constructor(
    @InjectRepository(TecnologyEntity)
    private readonly repo: Repository<TecnologyEntity>,
  ) {}

  async create(dto: CreateTecnologyDto): Promise<TecnologyEntity> {
    const newUser = this.repo.create(dto);
    return await this.repo.save(newUser);
  }

  async findAll(): Promise<TecnologyEntity[] | null> {
    return await this.repo.find();
  }

  async findOne(id: number): Promise<TecnologyEntity | null> {
    return await this.repo.findOne({ where: { id } });
  }

  async findByName(name: string): Promise<TecnologyEntity | null> {
    return await this.repo.findOne({ where: { name } });
  }

  async update(
    id: number,
    data: UpdateTecnologyDto,
  ): Promise<TecnologyEntity | null> {
    const updateUser = { id, ...data };
    return await this.repo.save(updateUser);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.repo.delete(id);
  }
}
