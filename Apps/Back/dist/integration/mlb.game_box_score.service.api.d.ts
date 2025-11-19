import { GamesBoxScoreService } from 'src/Graphql/GamesBoxScore/gamesBoxScore.service';
export declare class MlbBoxScoreGamesServiceApi {
    private readonly gamesBoxScoreService;
    constructor(gamesBoxScoreService: GamesBoxScoreService);
    getBoxScoreGamesFromApi(id: string[]): Promise<void>;
    private sanitizeGame;
}
