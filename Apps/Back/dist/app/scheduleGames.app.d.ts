import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
import { ScheduleGamesSeries } from 'src/Graphql/ScheduleGames/Entities/schedule.entity';
export declare class ScheduleGamesApp {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    getScheduleGamesSeries(startDate: string, endDate: string): Promise<ScheduleGamesSeries[]>;
}
