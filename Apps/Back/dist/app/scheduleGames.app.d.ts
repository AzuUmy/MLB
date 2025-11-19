import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
import { ScheduleGamesSeries } from 'src/Graphql/ScheduleGames/Entities/schedule.entity';
import { MlbBoxScoreGamesServiceApi } from 'src/integration/mlb.game_box_score.service.api';
export declare class ScheduleGamesApp {
    private readonly scheduleService;
    private readonly mlbBoxScoreGamesServiceApi;
    constructor(scheduleService: ScheduleService, mlbBoxScoreGamesServiceApi: MlbBoxScoreGamesServiceApi);
    getScheduleGamesSeries(startDate: string, endDate: string): Promise<ScheduleGamesSeries[]>;
    checkGamesStatus(): Promise<void>;
}
