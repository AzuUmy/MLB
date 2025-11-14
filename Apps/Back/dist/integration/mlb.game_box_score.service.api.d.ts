import { Game as boxScoreGames } from '@my-mlb/shared';
export declare class MlbBoxScoreGamesServiceApi {
    getBoxScoreGamesFromApi(id: string[]): Promise<boxScoreGames[] | undefined>;
}
