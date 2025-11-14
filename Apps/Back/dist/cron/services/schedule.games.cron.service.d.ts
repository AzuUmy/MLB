import { MlbScheduleGamesServiceApi } from 'src/integration/mlb.schedule_games.service.api';
export declare class MlbSchedulerService {
    private readonly mlbScheduleGamesServiceApi;
    constructor(mlbScheduleGamesServiceApi: MlbScheduleGamesServiceApi);
    onModuleInit(): void;
    handleDailyScheduleFetch(): Promise<void>;
}
