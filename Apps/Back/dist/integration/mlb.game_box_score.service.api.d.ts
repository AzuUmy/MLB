import { Games } from '@my-mlb/shared';
import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
import { GamesBoxScoreApp } from 'src/app/gamesBoxScore.app';
export declare class MlbBoxScoreGamesServiceApi {
    private readonly gamesBoxScoreApp;
    private readonly scheduleGamesService;
    constructor(gamesBoxScoreApp: GamesBoxScoreApp, scheduleGamesService: ScheduleService);
    getBoxScoreGamesFromApi(games?: Games[]): Promise<void>;
    private sanitizeGame;
}
