import { Expose } from 'class-transformer';

export class ResponseTecnologyDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description: string;
}
