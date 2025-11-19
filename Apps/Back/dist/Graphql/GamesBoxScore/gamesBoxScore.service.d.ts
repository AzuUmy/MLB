import { Game } from './Entities/Game.entity';
import { Model } from 'mongoose';
import { GameDocument } from 'src/schema/gamesBoxScore/game.schema';
export declare class GamesBoxScoreService {
    private readonly gamesBoxScoreModel;
    constructor(gamesBoxScoreModel: Model<GameDocument>);
    creatGamesBoxScore(game: Game[]): Promise<void>;
}
