import { Game } from 'src/Graphql/GamesBoxScore/Entities/Game.entity';
import { GamesBoxScoreService } from 'src/Graphql/GamesBoxScore/gamesBoxScore.service';
export declare class GamesBoxScoreApp {
    private readonly gamexBoxScoreService;
    constructor(gamexBoxScoreService: GamesBoxScoreService);
    getGamesBoxScore(id: string): Promise<Game | null>;
}
