import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BuilderEntity } from './builder.entity';
import { CreateBuilderDto } from './builders.dto';

@Injectable()
export class BuildersService {
  constructor(
    @InjectRepository(BuilderEntity)
    private builderRepo: Repository<BuilderEntity>,
  ) {}

  async findAll() {
    return await this.builderRepo.find();
  }

  async create(data: CreateBuilderDto) {
    const newBuilder = this.builderRepo.create(data);
    return await this.builderRepo.save(newBuilder);
  }
}
