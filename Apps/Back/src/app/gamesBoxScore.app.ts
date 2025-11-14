import { Injectable, Logger } from '@nestjs/common';
import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
import { MlbBoxScoreGamesServiceApi } from 'src/integration/mlb.game_box_score.service.api';

@Injectable()
export class GamesBoxScoreApp {
  constructor(private readonly scheduleService: ScheduleService,
    private readonly mlbBoxScoregamesServiceApp: MlbBoxScoreGamesServiceApi
  ) {}

  async getGamesBoxScore(id: string) {
    const gamesBoxScore = await this.scheduleService.getScheduleGamesById();

    //const scheduleGamesId = gamesBoxScore.map(e => e.games.map(a => a.id))

        Logger.log('games boxScore id for testing', gamesBoxScore);

    
    //const boxScore = this.mlbBoxScoregamesServiceApp.getBoxScoreGamesFromApi(scheduleGamesId)
  }
}
