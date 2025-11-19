import { ScheduleGamesApp } from 'src/app/scheduleGames.app';
import { MlbBoxScoreGamesServiceApi } from 'src/integration/mlb.game_box_score.service.api';
export declare class MlbSGamesBoxScoreService {
    private readonly mlbGamesBoxScoreServiceApi;
    private readonly shceduleGamesApp;
    constructor(mlbGamesBoxScoreServiceApi: MlbBoxScoreGamesServiceApi, shceduleGamesApp: ScheduleGamesApp);
    onModuleInit(): void;
    handleDailyScheduleFetch(): Promise<void>;
    fetchThreeHourSync(): Promise<void>;
    fetchMidnightFinalSync(): Promise<void>;
}
