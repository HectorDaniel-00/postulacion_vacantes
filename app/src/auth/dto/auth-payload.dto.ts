import { PartialType } from '@nestjs/mapped-types';
import { AuthResponseDto } from './auth-response.dto';

export class AuthPayloadDto extends PartialType(AuthResponseDto) {
  sub?: number;
}
