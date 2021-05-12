import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BuilderEntity } from './builder.entity';

@Injectable()
export class BuildersService {
  constructor(
    @InjectRepository(BuilderEntity)
    private builderRepo: Repository<BuilderEntity>,
  ) {}

  async findAll() {
    return await this.builderRepo.find();
  }
}
