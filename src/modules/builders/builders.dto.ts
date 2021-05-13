import {
  IsString,
  IsEmail,
  IsOptional,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateBuilderDto {
  @IsPositive()
  @IsNotEmpty()
  readonly participantId: number;

  @IsString()
  @IsNotEmpty()
  readonly identification: string;

  @IsString()
  @IsNotEmpty()
  readonly names: string;

  @IsString()
  @IsNotEmpty()
  readonly lastNames: string;

  @IsString()
  @IsNotEmpty()
  readonly phoneNumber: string;

  @IsEmail()
  @IsOptional()
  readonly email: string;

  @IsPositive()
  @IsNotEmpty()
  readonly citieId: number;
}

export class UpdateBuilderDto extends PartialType(CreateBuilderDto) {}
