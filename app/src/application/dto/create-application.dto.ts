import { IsNumber } from 'class-validator';

export class CreateApplicationDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  vacancyId: number;
}
