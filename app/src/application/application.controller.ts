import { Controller, Post, Param, ParseIntPipe } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { CurrentUser, Roles } from 'src/common/decorator';

@Controller('vacancies')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post(':vacancyId/apply')
  @Roles('USER')
  async applyToVacancy(
    @Param('vacancyId', ParseIntPipe) vacancyId: number,
    @CurrentUser() user: { id: number },
  ) {
    return this.applicationService.apply(user.id, vacancyId);
  }
}
