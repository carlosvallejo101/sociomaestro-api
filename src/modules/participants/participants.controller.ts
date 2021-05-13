import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ParticipantsService } from './participants.service';

@ApiTags('participants')
@Controller('participants')
export class ParticipantsController {
  constructor(private participantsService: ParticipantsService) {}

  @Get('/program/:programId')
  async getByProgramId(@Param('programId', ParseIntPipe) programId: number) {
    return await this.participantsService.findByProgramId(programId);
  }

  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.participantsService.findOne(id);
  }
}
