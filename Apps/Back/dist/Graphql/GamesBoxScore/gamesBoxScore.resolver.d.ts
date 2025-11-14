import { GamesBoxScoreApp } from 'src/app/gamesBoxScore.app';
export declare class GamesBoxScoreResolver {
    private readonly gamesBoxScoreApp;
    constructor(gamesBoxScoreApp: GamesBoxScoreApp);
    gamesBoxScore(): Promise<any>;
}
