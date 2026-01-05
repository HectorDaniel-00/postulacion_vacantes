import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto, AuthRegisterDto, AuthResponseDto } from './dto';
import { Message, Public } from 'src/common/decorator';
import { plainToInstance } from 'class-transformer';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @Public()
  @Message('Usuario registrado correctamente')
  create(@Body() dto: AuthRegisterDto) {
    const auth = this.authService.register(dto);
    return plainToInstance(AuthResponseDto, auth, {
      excludeExtraneousValues: true,
    });
  }

  @Post('login')
  @Public()
  @Message('Usuario logueado correctamente')
  login(@Body() dto: AuthLoginDto) {
    const auth = this.authService.login(dto);
    return plainToInstance(AuthResponseDto, auth, {
      excludeExtraneousValues: true,
    });
  }
}
