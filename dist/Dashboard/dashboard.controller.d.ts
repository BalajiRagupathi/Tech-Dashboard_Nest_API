import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly tech_list_data;
    constructor(tech_list_data: DashboardService);
    getTechList(): {
        list: import("./dashboard.model").Dashboard[];
    };
}
