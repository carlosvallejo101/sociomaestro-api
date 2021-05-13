import { Controller, Get, ParseIntPipe, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BuildersService } from './builders.service';
import { CreateBuilderDto } from './builders.dto';

@ApiTags('builders')
@Controller('builders')
export class BuildersController {
  constructor(private buildersService: BuildersService) {}

  @Get()
  async getBuilders() {
    return await this.buildersService.findAll();
  }

  @Post()
  async createBuilder(@Body() payload: CreateBuilderDto) {
    return await this.buildersService.create(payload);
  }
}
