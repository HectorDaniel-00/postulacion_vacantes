import { Controller, Post, Param, ParseIntPipe } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { CurrentUser, Message, Roles } from 'src/common/decorator';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Applications')
@ApiBearerAuth()
@Controller('vacancies')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Message('Se aplico con exito a la vacante')
  @ApiOperation({ summary: 'Aplicar a una vacante' })
  @ApiResponse({ status: 201, description: 'Aplicación exitosa.' })
  @ApiResponse({ status: 404, description: 'Vacante no encontrada.' })
  @Post(':vacancyId/apply')
  @Roles('USER')
  async applyToVacancy(
    @Param('vacancyId', ParseIntPipe) vacancyId: number,
    @CurrentUser() user: { id: number },
  ) {
    return this.applicationService.apply(user.id, vacancyId);
  }
}
