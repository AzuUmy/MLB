import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleResolver } from './schedule.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleGames, ScheduleGamesSchema } from 'src/schema/scheduleGames/scheduleGames.schema';
import { ScheduleGamesApp } from 'src/app/scheduleGames.app';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ScheduleGames.name, schema: ScheduleGamesSchema },
    ]),
  ],
  providers: [ScheduleService, ScheduleResolver, ScheduleGamesApp],
  exports: [ScheduleService],
})
export class ScheduleModule {}
