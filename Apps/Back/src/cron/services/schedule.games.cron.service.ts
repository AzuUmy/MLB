import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { MlbScheduleGamesServiceApi } from 'src/integration/mlb.schedule_games.service.api';

@Injectable()
export class MlbScheduleService {
  constructor(
    private readonly mlbScheduleGamesServiceApi: MlbScheduleGamesServiceApi,
  ) {}

  onModuleInit() {
    Logger.log('MLB SchedulerService initialized');
  }

  @Cron('0 0 0 * * *', { timeZone: 'UTC' })
  async handleDailyScheduleFetch() {
    Logger.log('Cron triggered: handleDailyScheduleFetch');
    await this.mlbScheduleGamesServiceApi.fetchDailyScheduleGames();
  }
}
