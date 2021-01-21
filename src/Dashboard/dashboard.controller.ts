import { Controller, Get } from '@nestjs/common';

import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly tech_list_data: DashboardService) {}

  @Get('list')
  getTechList() {
    return { list: this.tech_list_data.getTechList() };
  }
}
