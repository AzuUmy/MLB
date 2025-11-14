import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
import { MlbBoxScoreGamesServiceApi } from 'src/integration/mlb.game_box_score.service.api';
export declare class GamesBoxScoreApp {
    private readonly scheduleService;
    private readonly mlbBoxScoregamesServiceApp;
    constructor(scheduleService: ScheduleService, mlbBoxScoregamesServiceApp: MlbBoxScoreGamesServiceApi);
    getGamesBoxScore(id: string): Promise<void>;
}
