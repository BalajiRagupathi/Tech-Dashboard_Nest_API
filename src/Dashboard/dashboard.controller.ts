import { Controller, Get } from '@nestjs/common';

import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly tech_list_data: DashboardService) {}

  @Get('list')
  getTechList() {
    let tech_list = this.tech_list_data.getTechList();
    return { list: tech_list, top: tech_list.slice(0,5) };
  }
}
