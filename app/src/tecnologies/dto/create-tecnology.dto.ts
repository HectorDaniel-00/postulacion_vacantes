import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTecnologyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}
