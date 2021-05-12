import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BuildersService } from './builders.service';

@ApiTags('builders')
@Controller('builders')
export class BuildersController {
  constructor(private buildersService: BuildersService) {}

  @Get()
  async getBuilders() {
    return this.buildersService.findAll();
  }
}
