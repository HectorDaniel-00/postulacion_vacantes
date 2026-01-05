import { Exclude, Expose } from 'class-transformer';

export class AuthResponseDto {
  @Expose()
  id?: number;

  @Expose()
  name?: string;

  @Expose()
  email?: string;

  @Exclude()
  password: string;

  @Expose()
  role?: number;

  @Expose()
  access_token?: string;
}
