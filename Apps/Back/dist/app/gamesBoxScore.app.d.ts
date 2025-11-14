import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
export declare class GamesBoxScoreApp {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    getGamesBoxScore(): Promise<void>;
}
