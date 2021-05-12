import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateBuilderDto {
  // TO DO
  // readonly establishmentName: string;

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

  // TO DO
  // readonly city: number;
}
