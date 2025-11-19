import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Game } from './Entities/Game.entity';
import { Model } from 'mongoose';
import { GameDocument } from 'src/schema/gamesBoxScore/game.schema';

@Injectable()
export class GamesBoxScoreService {
  constructor(
    @InjectModel(Game.name)
    private readonly gamesBoxScoreModel: Model<GameDocument>,
  ) {}

  async creatGamesBoxScore(game: Game[]) {
    try {
      this.gamesBoxScoreModel.create(game);
      Logger.log('games injected sucesfully');
    } catch (error) {
      Logger.error('failed injecting games', error);
    }
  }
}
