import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ScheduleGamesApp } from 'src/app/scheduleGames.app';
import { MlbBoxScoreGamesServiceApi } from 'src/integration/mlb.game_box_score.service.api';

@Injectable()
export class MlbSGamesBoxScoreService {
  constructor(
    private readonly mlbGamesBoxScoreServiceApi: MlbBoxScoreGamesServiceApi,
    private readonly shceduleGamesApp: ScheduleGamesApp
  ) {}

  onModuleInit() {
    Logger.log('MLB BoxScoreService initialized');
  }

  @Cron('*/30 * * * * *', { timeZone: 'UTC' })
  async handleDailyScheduleFetch() {
    Logger.log('Cron triggered: Handling games boxscore of finished games');
    await this.shceduleGamesApp.checkGamesStatus();
  }

  @Cron('0 0 */3 * * *', { timeZone: 'UTC' })
  async fetchThreeHourSync() {
    Logger.log('Cron: 3-hour deep boxscore sync');
    await this.mlbGamesBoxScoreServiceApi.getBoxScoreGamesFromApi();
  }

  @Cron('0 0 0 * * *', { timeZone: 'UTC' })
  async fetchMidnightFinalSync() {
    Logger.log('Cron: Midnight final boxscore sync');
    await this.mlbGamesBoxScoreServiceApi.getBoxScoreGamesFromApi();
  }
}
