import { ScheduleGamesApp } from 'src/app/scheduleGames.app';
import { ScheduleGames } from '@my-mlb/shared';
export declare class MlbScheduleGamesServiceApi {
    private readonly scheduleGamesApp;
    constructor(scheduleGamesApp: ScheduleGamesApp);
    getScheduleGamesFromApi(year: string, month: string, day: string): Promise<ScheduleGames | undefined>;
    fetchDailyScheduleGames(): Promise<void>;
}
