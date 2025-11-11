import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { MlbServiceApi } from 'src/integration/mlb.service.api';

@Injectable()
export class MlbSchedulerService {
  constructor(private readonly mlbServiceApi: MlbServiceApi) {}

  onModuleInit() {
    Logger.log('MLB SchedulerService initialized');
  }

  @Cron('0 0 0 * * *', { timeZone: 'UTC' })
  async handleDailyScheduleFetch() {
    Logger.log('Cron triggered: handleDailyScheduleFetch');
    await this.mlbServiceApi.fetchDailyScheduleGames();
  }
}
