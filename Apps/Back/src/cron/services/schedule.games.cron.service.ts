import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { MlbServiceApi } from 'src/integration/mlb.service.api';

@Injectable()
export class MlbSchedulerService {
  constructor(private readonly mlbServiceApi: MlbServiceApi) {}
  @Cron('0 * * * * *', { timeZone: 'UTC' })
  async handleDailyScheduleFetch() {
    await this.mlbServiceApi.fetchDailyScheduleGames();
  }
}