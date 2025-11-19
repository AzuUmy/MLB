import { Injectable } from '@nestjs/common';
import { GamesBoxScoreService } from 'src/Graphql/GamesBoxScore/gamesBoxScore.service';
import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
import { MlbBoxScoreGamesServiceApi } from 'src/integration/mlb.game_box_score.service.api';

@Injectable()
export class GamesBoxScoreApp {
  constructor(
    private readonly scheduleService: ScheduleService,
    private readonly gamexBoxScoreService: GamesBoxScoreService
  ) {}

  async getGamesBoxScore(id: string) {
    //const gamesBoxScore = await this.scheduleService.getScheduleGamesById();
    //this.mlbBoxScoregamesServiceApp.getBoxScoreGamesFromApi(gamesBoxScore);
  }
}
