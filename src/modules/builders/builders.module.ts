import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BuildersController } from './builders.controller';
import { BuildersService } from './builders.service';
import { BuilderEntity } from './builder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BuilderEntity])],
  providers: [BuildersService],
  controllers: [BuildersController],
})
export class BuildersModule {}
