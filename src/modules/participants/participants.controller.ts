import { Controller, Get, Param } from '@nestjs/common';

import { ParticipantsService } from './participants.service';

@Controller('participants')
export class ParticipantsController {
  constructor(private participantsService: ParticipantsService) {}

  @Get()
  async findAll() {
    return await this.participantsService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return await this.participantsService.findOne(id);
  }
}
