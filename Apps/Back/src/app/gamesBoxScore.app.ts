import { Injectable } from '@nestjs/common';
import { Game } from 'src/Graphql/GamesBoxScore/Entities/Game.entity';
import { GamesBoxScoreService } from 'src/Graphql/GamesBoxScore/gamesBoxScore.service';

@Injectable()
export class GamesBoxScoreApp {
  constructor(private readonly gamexBoxScoreService: GamesBoxScoreService) {}

  async getGamesBoxScore(id: string): Promise<Game | null> {
    const gamesBoxScore = this.gamexBoxScoreService.getGamesBoxScoreById(id);
    return gamesBoxScore;
  }
}
