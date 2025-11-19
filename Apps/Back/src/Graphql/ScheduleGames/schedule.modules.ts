import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleResolver } from './schedule.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ScheduleGames,
  ScheduleGamesSchema,
} from 'src/schema/scheduleGames/scheduleGames.schema';
import { ScheduleGamesApp } from 'src/app/scheduleGames.app';
import { MlbBoxScoreGamesServiceApi } from 'src/integration/mlb.game_box_score.service.api';
import { GamesBoxScoreApp } from 'src/app/gamesBoxScore.app';
import { GamesBoxScoreService } from '../GamesBoxScore/gamesBoxScore.service';
import { Game, GameSchema } from 'src/schema/gamesBoxScore/game.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ScheduleGames.name, schema: ScheduleGamesSchema },
      { name: Game.name, schema: GameSchema },
    ]),
  ],
  providers: [
    ScheduleService,
    ScheduleResolver,
    ScheduleGamesApp,
    MlbBoxScoreGamesServiceApi,
    GamesBoxScoreApp,
    GamesBoxScoreService,
  ],
  exports: [ScheduleService],
})
export class ScheduleModule {}
