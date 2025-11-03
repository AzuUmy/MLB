import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
import { ScheduleGamesSeries } from 'src/Graphql/ScheduleGames/Entities/schedule.entity';
import { ScheduleGames } from '@my-mlb/shared/Types/gamesMLBTypes';
export declare class ScheduleGamesApp {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    getScheduleGamesSeries(startDate: string, endDate: string): Promise<ScheduleGamesSeries[]>;
    getScheduleGamesFromApi(year: string, month: string, day: string): Promise<ScheduleGames | undefined>;
}
