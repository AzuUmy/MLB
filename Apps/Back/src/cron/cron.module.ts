import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { CronService } from './cron.service';
import { MlbSchedulerService } from 'src/cron/services/schedule.games.cron.service';
import { MlbScheduleGamesServiceApi } from 'src/integration/mlb.schedule_games.service.api';
import { ScheduleGamesApp } from 'src/app/scheduleGames.app';
import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
import { ScheduleGames } from 'src/Graphql/ScheduleGames/Entities/schedule.entity';
import { ScheduleGamesSchema } from 'src/schema/scheduleGames/scheduleGames.schema';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forFeature([
      { name: ScheduleGames.name, schema: ScheduleGamesSchema },
    ]),
  ],
  providers: [
    CronService,
    MlbSchedulerService,
    MlbScheduleGamesServiceApi,
    ScheduleGamesApp,
    ScheduleService,
  ],
  exports: [MlbSchedulerService],
})
export class CronModule {}
