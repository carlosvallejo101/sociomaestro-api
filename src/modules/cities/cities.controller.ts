import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Get()
  async getAll() {
    return await this.citiesService.findAll();
  }

  @Get('/:id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.citiesService.findOne(id);
  }
}
