import { Game } from './Entities/Game.entity';
import { Model } from 'mongoose';
import { GameDocument } from 'src/schema/gamesBoxScore/game.schema';
import { Game as gameBoxScore } from '@my-mlb/shared';
export declare class GamesBoxScoreService {
    private readonly gamesBoxScoreModel;
    constructor(gamesBoxScoreModel: Model<GameDocument>);
    getGamesBoxScoreById(id: string): Promise<gameBoxScore | null>;
    creatGamesBoxScore(game: Game[]): Promise<void>;
}
