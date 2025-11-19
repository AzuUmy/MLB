import { GamesBoxScoreService } from 'src/Graphql/GamesBoxScore/gamesBoxScore.service';
import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
export declare class GamesBoxScoreApp {
    private readonly scheduleService;
    private readonly gamexBoxScoreService;
    constructor(scheduleService: ScheduleService, gamexBoxScoreService: GamesBoxScoreService);
    getGamesBoxScore(id: string): Promise<void>;
}
